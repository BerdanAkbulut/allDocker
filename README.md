#DOCKER

 --format = container bilgilerini formatlama
 
- container oluşturma
 docker run --name name -p 8080:80 -d image:tag
 --------------------------------------------------------------------------------------
 
 volume -> host ile container arasında veri alışverişi
volume kullanımı docker run --name bedo -v C:\Users\berda\Desktop\bedo:/usr/share/nginx/html:ro -d -p 8080:80 nginx:latest

dosyayı açma -> docker exec -it bedo bash
cd /usr/share/nginx/html 
touch about.html -> file yaratma
exit-> çıkış



-- SHARİNG BETWEEN CONTAİNERS
(volume copyied)copy-> docker run --name bedo-copy --volumes-from bedo -d -p 8081:80 nginx
------------------------------------------------------------------------------
--Build own images--

1) creating Dockerfile in the project 
(ya var olan bir image üzerinden yeni bir image yapılabilir
bu durumda Dockerfile şöyle yazılabilir ->
 FROM nginx:latest
 ADD . /usr/share/nginx/html
----ya da 0 dan oluşturulur										   
)

şimdi yazılan dockerfile ' a göre image oluşturulması gerek
2)docker build --tag website:latest . (. bu klasörüniçindeki dockerfile ı kasteder)
__ image oluşturuldu ___

----------------------------------------------------------------------------

with node.js--
1- mkdir dosya
2- npm init  
3- npm install --save express
4- create index.js , write routing
5- node index.js to test
DOCKERFİLE INI YAZIP CONTAİNERLEŞTİRELİM
		1- create Dockerfile

			FROM node:latest  -> BU İMAJDAN
			WORKDIR /app   -> CONTAİNER IN İÇİNE BU DOSYAYI YOKSA YARAT
			ADD . .  -> bu dosyanın hepsini app dosysına ekle 
			RUN npm install -> gerekli paketleri containere yükle
			CMD node index.js-> yayınla 
	** (dosyanın içinde)->	docker build -t imageName:tag .
	** şimdi containeri oluşturuyoruz
	docker run --name name -d -p 3000:3000 imageName:tag
	__ done__ 
----------------------------------------------------------------------------------------------	
	
-DOCKERFILEIGNORE	
node_modules , dockerfile gibi gösterilmesine gerek olmayan dosyaları bu dosyayı yaratarak image oluştururken görünmesini engelleyebiliriz.
-----------------------------------------------------------------------------
