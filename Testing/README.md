# Testing

## Kurulum

React Native

## Tools

- Jest
- @testing-library/react-native

## Özellikler

- Snapshots oluşturulması.
- Butona verilen title değerinin testinin yapılması.
- Butonun tetiklenme durumunun testinin yapılması.
- Verilen style değerlerinin testinin yapılması.
- Input'dan gelen değerlerin listeye eklenmesinin testinin yapılması.
- Input'dan gelen değerlerin listeye eklenememe durumunun testinin yapılması.

## Başlangıç

Bu depoyu yerel makinenizde klonlayın.

```
git clone https://github.com/ibrahimaykutbas/patika-react-native.git
```

### Kullanım

Projeyi klonladıktan sonra kullanmak için:

```
cd patika-react-native/Testing
cd .
```

Proje bağımlılıklarını yüklemek için proje klasörüne aşağıdaki komutları çalıştırın.

```
npm init
npm install
```

Bu talimatlar, geliştirme ve test amacıyla yerel makinenizde projenin bir kopyasını hazır ve çalışır hale getirecektir.

## Kullanılabilir Komut Dosyaları

Proje dizininde şunları çalıştırabilirsiniz:

```
npx react-native run-android
-veya-
npx react-native run-ios
```

Testi yapmak için:

```
yarn test
```

Testi her başlatmada test dosyalarını güncelleyerek test yapmak için:

```
yarn test -u
```

Yapılan her değişiklikte otomatik test yapmak için:

```
yarn test -u --watchAll
```

Yapılan testlerin oranlarını görmek için:

```
yarn test --coverage
```

## Daha Fazla Bilgi İçin

Daha fazlasını şuradan öğrenebilirsiniz: [React documentation](https://reactnative.dev/)
