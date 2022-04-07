---
title: 'PHPde Curl Kullanımı ve Örnekleri'
date: '2022-02-22'
thumbnail: '/thumbnails/writing.png'
slug: 'phpde-curl-kullanimi-ve-ornekleri'
tag: 'php'
---

### Curl nedir?

Curl, desteklenen protokollerden birini kullanarak uzak bir sunucuya veya uzak bir sunucudan veri aktarmak için kullanılan bir komut satırı yardımcı programıdır. Geliştiriciler API'yi test etmek, sunucuya istek göndermek, sunucu yanıt başlıklarını görüntülemek ve yük testi API'lerini görüntülemek için curl kullanır. Curl, HTTP, HTTPS, FTP, FTPS ve SFTP dahil 25'ten fazla protokolü destekler, SSL sertifikaları için yerleşik desteğe sahiptir, HTTP POST, HTTP PUT, FTP dosya yükleme, web formu gönderme, kullanıcı kimlik doğrulama, HTTP Çerezleri ve daha fazlası.

### POST istek yöntemi nedir?

POST, HTTP tarafından desteklenen 9 yaygın HTTP istek yönteminden biridir. POST yöntemi, web sunucusundan, POST istek mesajının gövdesinde yer alan verileri işlemek veya depolamak için kabul etmesini ister. POST yöntemi, dosyaları yüklemek ve web formlarını göndermek için kullanılır. POST yöntemi, sunucuda bir kaynak oluşturmak veya güncellemek için CRUD işlemleri için kullanılır. POST istekleri, sunucunun durumunu değiştirebilir.

### Bir POST isteğinin gövdesinde veri gönderebilir miyim?

Evet, POST isteğinin gövdesindeki bir sunucuya herhangi bir veri gönderebilirsiniz. HTTP POST isteklerinin, sunucunun bu verileri doğru şekilde yorumlamasına ve işlemesine izin vermek için POST istek gövdesindeki veri türünü tanımlayan bir içerik türü başlığına ihtiyacı vardır. Örneğin, bir web formu sunucusuna gönderirken, İçerik türü genellikle application/x-www-form-urlencoding'dir.

Bunu PHP'de bir örnekle açıklayalım.

```php
$url = "https://reqbin.com/echo/post/json";

$curl = curl_init($url);
curl_setopt($curl, CURLOPT_URL, $url);
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);

$headers = array(
   "Content-Type: application/json",
);
curl_setopt($curl, CURLOPT_HTTPHEADER, $headers);

$data = '{"urun_id": 123, "miktar": 100}';

curl_setopt($curl, CURLOPT_POSTFIELDS, $data);

//for debug only!
curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);

$resp = curl_exec($curl);
curl_close($curl);
var_dump($resp);
```

Yukarda da görüldüğü üzere "reqbin.com" sitesine "urun_id" ve "miktarını" JSON tipinde gönderdik ve dönen sonucu ekrana yazdırdık.
