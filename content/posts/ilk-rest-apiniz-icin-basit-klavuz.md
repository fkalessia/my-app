---
title: 'İlk REST APIniz için Basit Kılavuz'
date: '2022-01-22'
thumbnail: '/thumbnails/node.png'
slug: 'ilk-rest-api-basit-klavuz'
tag: 'nodejs'
---

İnternetteki uygulamaların büyük bir çoğunluğunun internetteki bir yerden veri çekmesi gerekiyor. Örneğin bir API, CMS veya doğrudan veritabanından.

Bu, REST API'lerinin kurulumunda size yol gösteren bir başlangıç kılavuzu olacaktır. Terminolojileri ele alacağız ve sıfırdan bir API oluşturmaya başlayacağız. Ancak, bu makalem'de veritabanlarını ele almayacağız, bunun yerine bellek içi verileri kullanacağız.

Bu, tüm yeni başlayanlar için basit bir kılavuzdur. Size bir REST API kurma konusunda yol göstereceğim. Terminolojilere biraz göz atacağız ve sunucumuzu sıfırdan kurmaya başlayacağız.

## JARGON ÜZERİNE BİRAZ

API (Application Programming Interface), yazılım ile diğer yazılım veya donanım gibi öğeler arasında etkileşimi sağlayan bir yazılım programı içinde bulunan bir dizi özellik ve kuraldır.

REST (Representational State Transfer), verimli, güvenilir ve ölçeklenebilir sistemler sağlayan bir grup yazılım mimarisi tasarım kısıtlamasıdır. İstemci, HTTP protokolü üzerinden bir yanıt döndüren sunucuya bir istekte bulunur. Morten Rand-Hendriksen, bir dersinde bunu şöyle ifade etmiştir:

REST belirli bir teknoloji değil, daha çok fiil adı verilen bir dizi standart yöntemi (CRUD işlemleri gibi) alarak ve standartlaştırılmış yapılandırılmış verileri, tipik olarak JSON, HTML veya XML, kaynak olarak adlandırılır.

Birazdan göreceğiniz gibi, Express istemci-sunucu mimarisini kullanır ve API istekleri yapmak için oluşturulan her işlev iki parametreyi kabul eder req ve res.

req, bir olayı başlatan HTTP isteği hakkında bilgi içerir.

res, bir Express uygulamasının bir HTTP isteği aldığında geri gönderdiği istenen HTTP yanıtıdır.

Bunları req ve res olarak adlandırmak veya okunabilirlik için istek ve yanıt olarak adlandırmak bir kuraldır.

HTTP, web sunucusu ve istemci arasındaki iletişimden sorumludur. Bir web sayfasını her ziyaret ettiğinizde veya bir form gönderdiğinizde veya get isteği gönderen bir düğmeyi tıkladığınızda, istek göndermek ve yanıt almak için HTTP kullanıyorsunuz.

CRUD, Oluştur(Create), Oku(Read), Güncelle(Update) ve Sil(Delete)'in kısaltmasıdır. Bu işlemler yürütülmek üzere sunucuya gönderilir.

## SUNUCUMUZU KURALIM

Product-Rest-Api adlı bir klasör oluşturun. Projenize en sevdiğiniz ismi verebilir, akılda kalıcı hale getirebilirsiniz! (Bu muhtemelen geliştirici olmanın en zor yanıdır).

```bash
shell mkdir Product-Rest-Api
cd Product-Rest-Api
```

Uygulamanızı başlatın:

```bash
npm init -y
```

Kullanılan -y bayrağı, tüm soruları atlamak için bir kısayoldur. Ancak yine de npm init'i çalıştırabilir ve mevcut diğer seçenekleri öğrenebilirsiniz. Her iki şekilde de projenizin ayrıntılarını içeren bir package.json dosyası ve node_modules klasörü oluşturulacaktır.

Express Framework'ü yükleyin.

```bash
npm install --save express
```

Product-Rest-Api klasörü içinde server.js adlı yeni bir dosya oluşturun. Sunucu kodunuz burada olacak.

```bash
touch server.js
```

Aşağıdaki kodla yerel bir sunucu oluşturun:

```js
const express = require('express') //1

const app = express() //2

app.use(express.json()) //3

app.listen(8080, () => {
  console.log(`Sunucu 8080 numaralı bağlantı noktasında sorunsuz çalışıyor`)
}) //4
```

- Express'i projenize dahil etme.
- Express sunucusunu sıfırlar ve onu değişken bir uygulamaya ayarlar.
- Express, POST isteği aracılığıyla JSON olarak gönderilen verileri işleyemediğinden JSON gövdeleri ayrıştırılıyor.
- Sunucunuzun istekleri http://localhost:8080/ dinleyecek şekilde ayarlayalım.

Kod tabanınızda her değişiklik yaptığınızda sunucunuzun yeniden başlatılmasını önlemek için nodemon yükleyin. Bu komut global olarak kuracaktır:

```bash
npm install -g nodemon
```

Alternatif olarak, bir geliştirme bağımlılığı olarak yükleyebilirsiniz:

```bash
npm install --save-dev nodemon
```

Nodemon, herhangi bir değişiklik yapıldığında sunucunuzu otomatik olarak yeniden başlatır.
Uygulamamızı test etmek için bir test veri listesiyle çalışacaksınız. Aşağıdakini app.listen'in hemen üstüne yapıştırın (4).

```js
/*Test verileri*/
let data = [
  {
    id: 1,
    name: 'iPhone 12 Pro',
    description:
      'A14 Bionic. All-new design. Ceramic Shield. LiDAR Scanner. A Pro camera system optimized for low light.'
  },
  {
    id: 2,
    name: 'Galaxy S21 Ultra 5G',
    description:
      'It reaches faster 5G speeds with our industry-leading chipset, all while creating a revolution in photography.'
  },
  {
    id: 3,
    name: 'Nokia 8.3 5G',
    description: 'Shoot pro videos, share with 5G.'
  },
  {
    id: 4,
    name: 'Tecno Camon16 Premier',
    description:
      'The pioneer camera phone won multiple world-class awards and international media honor.'
  }
]
```

##API'YE ERİŞİM
API'nizi aşağıdaki araçlardan birini kullanarak test edebilirsiniz:

- REST: Postman veya Insomnia
- Komut satırından Curl ile

Bu eğitimde test için Postman kullanılacaktır.

#1. GET isteği gönderme
Test verileriniz için bir GET isteği göndereceksiniz. Aşağıdaki kodu kopyalayıp yapıştırmanız yeterlidir:

```js
/* Get request */
const getProducts = (req, res) => {
  try {
    res.json({
      message: 'OK',
      data
    })
  } catch {
    res.json({
      message: 'Ooops! Bir şeyler yanlış gitti 😧'
    })
  }
}

app.get('/', getProducts)
```

getProducts işlevi adından da anlaşılacağı gibi tüm ürünleri getirir.

- 'GET request made' oturumunu kapatır ve ardından bir try-catch ifadesi içinde bir JSON yanıtı gönderir. İstek sorunsuz çalışırsa, bir 'OK' mesajı ve test verilerinizi döndürür. Aksi takdirde, bir hata mesajı döndürülür.

- app.get() ayrıca iki parametre alır, bir rota yolu ve istemci bir yol istediğinde çağrılacak işlev. Bu, istemcinin "Hey sunucu, route'daki istekleri dinleyin ve "/" bir istek yapılırsa getProducts işlevini çağırın" demesine eşdeğerdir.

Artık Postman'a geçebiliriz.

<img src='https://cdn.hashnode.com/res/hashnode/image/upload/v1642766527111/dejQSSqRf.jpeg?auto=compress,format&format=webp' />

Alternatif olarak, tarayıcınızda http://localhost:8080/ açabilirsiniz.

#2. POST isteğinde bulunma

Kodu kopyalayıp yapıştırmadan önce size yol göstereyim.

```js
/* Post request */
const postProduct = (req, res) => {
  const { name, description } = req.body

  const newProduct = {
    id: data.length + 1,
    name,
    description
  }

  try {
    data.push(newProduct)
    res.json({
      message: `Yeni Ürün: ${newProduct.name} eklendi!`,
      data: newProduct
    })
  } catch {
    res.json({
      message: 'Oooops! Burada yanlış bir şey oldu'
    })
  }
}

app.post('/product', postProduct)
```

- Test verilerimize eklenecek yeni bir nesne talep ediyorsunuz. postProduct işlevimiz iki parametreyi kabul eder: res ve req, ardından bir ifadenin oturumunu kapatır.
- req.body nesnesinin yapısını ayrıştırarak ve ardından id, isim ve açıklamasını içeren req.body'den yeni ürünü taşımak için newProduct nesnesi yarattınız.
- İşlev, yeni ürünümüzü mevcut test verilere ekler. Ardından, eklenen yeni ürünü içeren bir mesaj ve verilerle birlikte bir JSON yanıtı gönderir. Başarısız olursa, bir hata mesajı döndürülür.

Yeni endpoint'inizi test etmek için kullanabileceğiniz bazı veriler:

```json
{
  "name": "Google Pixel 5",
  "description": "The Ultimate 5G Google phone."
}
```

Yukarıdaki JSON'u postmana kopyalayıp yapıştırın. URL'ye /product yolunu eklediğinizden ve POST seçeneğini belirlediğinizden emin olun. Body kısmına tıklayın ve mavi açılır menüden JSON'u seçin. Eklemek istediğiniz JSON'u gövdenin içine yapıştırın. Gönder düğmesine basın ve sihrin gerçekleşmesini izleyin.

<img src='https://cdn.hashnode.com/res/hashnode/image/upload/v1642766695972/z4Wim4dXX.jpeg?auto=compress,format&format=webp' />

#3. PUT isteği ile güncelleme
Veriler PUT kullanılarak güncellenir.

```js
/* Update request */
const updateData = (req, res) => {
  console.log('Update successfully made!')
  const { name, description } = req.body
  const { id } = req.params

  try {
    let update = data.filter((product) => {
      if (product.id === Number(id)) {
        product.name = name
        product.description = description
        return product
      }
    })
    res.send(update)
  } catch {
    res.json({
      message: 'Oops! Bir şeyler yanlış gitti 🤪'
    })
  }
}
app.put('/product/:id', updateData)
```

- updateData, ürünü kimliğe göre arar ve mevcut verileri günceller.
- Veriler, req.params nesnesinden alınır ve bir dize olduğu için bir tamsayıya dönüştürülür. Ürün adı ve açıklaması req.body'den alınır.

```json
{
  "id": 1,
  "name": "Motorolla one 5G",
  "description": "Sürdüğünüz yaşam için ihtiyacınız olan özellikleri edinin.."
}
```

Daha sonra bir mesaj ve güncellenmiş verilerle bir yanıt alırsınız. Şimdilik, id: 1 olan nesneyi "iPhone Pro"dan "Motorolla"ya değiştireceksiniz.

<img src='https://cdn.hashnode.com/res/hashnode/image/upload/v1642767062414/hp5HT__yT.jpeg?auto=compress,format&format=webp' />

Postman'a geçelim. PUT'u seçmeyi ve URL'ye /product/:id rotasını eklemeyi unutmayın.

#4. Son olarak, SİL İsteği

```js
/* Delete request */
const deleteProduct = (req, res) => {
  const { id } = req.params

  try {
    const product = data.filter((product) => {
      return product.id === Number(id)
    })

    const index = data.indexOf(product[0])

    data.splice(index, 1)
    res.json({
      message: `Ürün: ${id} başarıyla silindi!`,
      data
    })
  } catch {
    res.json({
      message: 'Oops! Bir şeyler yanlış gitti 😤'
    })
  }
}

app.delete('/product:id', deleteProduct)
```

- deleteProduct işlevi, diğer işlevlerle aynı şekilde çalışır. Ancak, req.params ile aynı kimliğe sahip olanı bulmak için ürünlerinizi filtrelediniz.
- Eşleşen nesne daha sonra veri listesinden birleştirildi. Her şey yolunda giderse, bir mesaj ve yeni veri listesi gönderilecektir.
- Ürün kimliği: 1'i (iPhone 12 Pro) arayacağız, ardından onu sileceğiz.

```json
{
  "id": "1",
  "name": "iPhone 12 Pro",
  "description": "A14 Bionic. All-new design. Ceramic Shield. LiDAR Scanner. A Pro camera system optimized for low light."
}
```

####Tüm kod server.js Dosyası

```js
const express = require('express')
const app = express()

app.use(express.json())

let data = [
  {
    id: 1,
    name: 'iPhone 12 Pro',
    description:
      'A14 Bionic. All-new design. Ceramic Shield. LiDAR Scanner. A Pro camera system optimized for low light.'
  },
  {
    id: 2,
    name: 'Galaxy S21 Ultra 5G',
    description:
      'It reaches faster 5G speeds with our industry-leading chipset, all while creating a revolution in photography.'
  },
  {
    id: 3,
    name: 'Nokia 8.3 5G',
    description: 'Shoot pro videos, share with 5G.'
  },
  {
    id: 4,
    name: 'Tecno Camon16 Premier',
    description:
      'The pioneer camera phone, won multiple world-class awards nad international media honor.'
  }
]

/* Get request */
const getProduct = (req, res) => {
  try {
    res.json({
      message: 'OK',
      data
    })
  } catch {
    res.json({
      message: 'Oops! Bir şeyler yanlış gitti 😧'
    })
  }
}

/* Post request */
const postProduct = (req, res) => {
  const { name, description } = req.body

  const newProduct = {
    id: data.length + 1,
    name,
    description
  }

  try {
    data.push(newProduct)
    res.json({
      message: `Yeni Ürün: ${newProduct.name} eklendi!`,
      data: newProduct
    })
  } catch {
    res.json({
      message: 'Oops! Bir şeyler yanlış gitti 🥴'
    })
  }
}

/* Delete request */
const deleteProduct = (req, res) => {
  const { id } = req.params

  try {
    const product = data.filter((product) => {
      return product.id === Number(id)
    })

    const index = data.indexOf(product[0])

    data.splice(index, 1)
    res.json({
      message: `Ürün: ${id} başarıyla silindi!`,
      data
    })
  } catch {
    res.json({
      message: 'Oops! Bir şeyler yanlış gitti 😤'
    })
  }
}

/* Update request */
const updateData = (req, res) => {
  const { name, description } = req.body
  const { id } = req.params
  try {
    let update = data.filter((product) => {
      if (product.id === Number(id)) {
        product.name = name
        product.description = description
        return product
      }
    })
    res.send(update)
  } catch {
    res.json({
      message: 'Oops! Bir şeyler yanlış gitti 🤪'
    })
  }
}

/** app routes */
app.get('/', getProduct)
app.post('/product', postProduct)
app.delete('/product/:id', deleteProduct)
app.put('/product/:id', updateData)

app.listen(8080, () => {
  console.log(`Sunucu 8080 numaralı bağlantı noktasında sorunsuz çalışıyor`)
})
```

##SONUÇ

Bu makale, REST API'lerinin nasıl çalıştığını tamamen anlatmaz, ancak çalışmaya başlamanıza yardımcı olacaktır. Verilerle oynayın ve kendi sürümünüzü oluşturun. Bir şeyler kırın, bir şeyler yapın bu öğrenmenin en kolay yoludur.
