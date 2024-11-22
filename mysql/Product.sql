CREATE DATABASE  IF NOT EXISTS `clothshop` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `clothshop`;
-- MySQL dump 10.13  Distrib 8.0.34, for macos13 (x86_64)
--
-- Host: 127.0.0.1    Database: clothshop
-- ------------------------------------------------------
-- Server version	8.1.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bill`
--

DROP TABLE IF EXISTS `bill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `bill` (
  `bill_id` int NOT NULL,
  `bill_date` varchar(45) NOT NULL,
  `product_id` int NOT NULL,
  `number_of_items` int NOT NULL,
  `bill_price` int NOT NULL,
  PRIMARY KEY (`bill_id`,`product_id`),
  KEY `product_id_idx` (`product_id`),
  CONSTRAINT `product_id` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bill`
--

LOCK TABLES `bill` WRITE;
/*!40000 ALTER TABLE `bill` DISABLE KEYS */;
INSERT INTO `bill` VALUES (20001,'12/02/24',104,1,685),(20001,'12/02/24',112,1,850),(20001,'12/02/24',210,1,790),(20002,'12/02/24',207,2,1600),(20002,'12/02/24',305,1,550),(20003,'12/02/24',208,1,490),(20003,'12/02/24',302,1,700),(20004,'13/02/24',412,1,690),(20005,'13/02/24',207,3,2400),(20005,'13/02/24',210,1,790),(20005,'13/02/24',306,1,750),(20006,'13/02/24',108,1,520),(20007,'14/02/24',205,1,1400),(20007,'14/02/24',207,3,2400),(20008,'14/02/24',106,1,750),(20008,'14/02/24',301,2,1700),(20008,'14/02/24',308,1,340),(20009,'14/02/24',301,1,850),(20010,'14/02/24',404,1,550),(20010,'14/02/24',407,1,590),(20011,'14/02/24',105,1,1390),(20011,'14/02/24',204,1,580),(20011,'14/02/24',309,1,650),(20011,'14/02/24',412,1,690),(20012,'15/02/24',105,1,1390),(20012,'15/02/24',201,2,900),(20013,'15/02/24',205,1,1400),(20013,'15/02/24',212,1,1850),(20014,'15/02/24',302,1,750),(20014,'15/02/24',401,1,340),(20015,'16/02/24',405,1,420),(20015,'16/02/24',409,2,950),(20016,'17/02/24',212,1,850),(20016,'17/02/24',309,1,650),(20016,'17/02/24',311,1,650),(20017,'17/02/24',207,2,1500),(20017,'17/02/24',310,1,590),(20018,'17/02/24',111,1,620),(20018,'17/02/24',201,1,1000),(20019,'17/02/24',204,1,680),(20019,'17/02/24',211,1,1450),(20019,'17/02/24',404,1,590),(20020,'17/02/24',202,1,450),(20020,'17/02/24',207,2,1600),(20020,'17/02/24',305,1,550),(20020,'17/02/24',412,1,690),(20021,'17/02/24',211,1,1450),(20022,'17/02/24',312,1,690),(20023,'18/02/24',309,1,650),(20023,'18/02/24',404,1,590),(20024,'18/02/24',106,1,750),(20024,'18/02/24',111,1,600),(20024,'18/02/24',202,1,450),(20024,'18/02/24',208,1,550),(20024,'18/02/24',305,2,1100),(20025,'19/02/24',201,1,1120),(20025,'19/02/24',209,1,1200),(30001,'01/03/24',303,1,650),(30002,'02/03/24',402,1,450),(30002,'02/03/24',406,1,740),(30003,'02/03/24',108,1,500),(30003,'02/03/24',110,1,690),(30003,'02/03/24',111,1,620),(30004,'03/03/24',207,1,800);
/*!40000 ALTER TABLE `bill` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `category`
--

DROP TABLE IF EXISTS `category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `category` (
  `category_id` int NOT NULL,
  `category_name` varchar(45) NOT NULL,
  PRIMARY KEY (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `category`
--

LOCK TABLES `category` WRITE;
/*!40000 ALTER TABLE `category` DISABLE KEYS */;
INSERT INTO `category` VALUES (1,'bag'),(2,'top'),(3,'shoes'),(4,'trousers & shorts');
/*!40000 ALTER TABLE `category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `logincus`
--

DROP TABLE IF EXISTS `logincus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `logincus` (
  `email_cus` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `logincus`
--

LOCK TABLES `logincus` WRITE;
/*!40000 ALTER TABLE `logincus` DISABLE KEYS */;
/*!40000 ALTER TABLE `logincus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loginmyshop`
--

DROP TABLE IF EXISTS `loginmyshop`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `loginmyshop` (
  `email` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loginmyshop`
--

LOCK TABLES `loginmyshop` WRITE;
/*!40000 ALTER TABLE `loginmyshop` DISABLE KEYS */;
/*!40000 ALTER TABLE `loginmyshop` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `newsletter`
--

DROP TABLE IF EXISTS `newsletter`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `newsletter` (
  `newsletter_email` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `newsletter`
--

LOCK TABLES `newsletter` WRITE;
/*!40000 ALTER TABLE `newsletter` DISABLE KEYS */;
/*!40000 ALTER TABLE `newsletter` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `product_id` int NOT NULL,
  `category_id` int NOT NULL,
  `product_name` varchar(45) NOT NULL,
  `product_description` varchar(500) NOT NULL,
  `product_price` varchar(45) NOT NULL,
  `product_price_promotion` varchar(45) NOT NULL,
  `product_sales_count` varchar(45) NOT NULL,
  `product_images1` varchar(255) NOT NULL,
  `product_images2` varchar(255) NOT NULL,
  `product_images3` varchar(255) NOT NULL,
  PRIMARY KEY (`product_id`),
  KEY `category_id_idx` (`category_id`),
  CONSTRAINT `category_id` FOREIGN KEY (`category_id`) REFERENCES `category` (`category_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (101,1,'Le grand Bambino','Handbag with adjustable crossbody strap.','820 eur','800 eur','80','/Users/matchima/Documents/imagesproduct/bag/b1.1.jpg','/Users/matchima/Documents/imagesproduct/bag/b1.2.jpg','/Users/matchima/Documents/imagesproduct/bag/b1.3.jpg'),(102,1,'Le petit panier Soli','Mini beach basket bag.','390 eur','350 eur','35','/Users/matchima/Documents/imagesproduct/bag/b2.1.jpg','/Users/matchima/Documents/imagesproduct/bag/b2.2.jpg','/Users/matchima/Documents/imagesproduct/bag/b2.3.jpg'),(103,1,'Le panier Soli','Beach basket bag.','450 eur','400 eur','50','/Users/matchima/Documents/imagesproduct/bag/b3.1.jpg','/Users/matchima/Documents/imagesproduct/bag/b3.2.jpg','/Users/matchima/Documents/imagesproduct/bag/b3.3.jpg'),(104,1,'Le sac Rond','Circle purse.','685 eur','670 eur','120','/Users/matchima/Documents/imagesproduct/bag/b4.1.jpg','/Users/matchima/Documents/imagesproduct/bag/b4.2.jpg','/Users/matchima/Documents/imagesproduct/bag/b4.3.jpg'),(105,1,'Le Bambimou doux','Puffed shearling flap bag.','1390 eur','1300 eur','100','/Users/matchima/Documents/imagesproduct/bag/b5.1.jpg','/Users/matchima/Documents/imagesproduct/bag/b5.2.jpg','/Users/matchima/Documents/imagesproduct/bag/b5.3.jpg'),(106,1,'Le Chiquito moyen boucle','Signature buckled handbag.','750 eur','700 eur','80','/Users/matchima/Documents/imagesproduct/bag/b6.1.jpg','/Users/matchima/Documents/imagesproduct/bag/b6.2.jpg','/Users/matchima/Documents/imagesproduct/bag/b6.3.jpg'),(107,1,'Le Bisou doux','Shearling shoulder bag.','790 eur','720 eur','90','/Users/matchima/Documents/imagesproduct/bag/b7.1.jpg','/Users/matchima/Documents/imagesproduct/bag/b7.2.jpg','/Users/matchima/Documents/imagesproduct/bag/b7.3.jpg'),(108,1,'Le cuerda Vertical','Grosgrain cross-body bag.','520 eur','500 eur','100','/Users/matchima/Documents/imagesproduct/bag/b8.1.jpg','/Users/matchima/Documents/imagesproduct/bag/b8.2.jpg','/Users/matchima/Documents/imagesproduct/bag/b8.3.jpg'),(109,1,'Le petit Tourni','Mini knotted bucket bag.','1150 eur','1100 eur','45','/Users/matchima/Documents/imagesproduct/bag/b9.1.jpg','/Users/matchima/Documents/imagesproduct/bag/b9.2.jpg','/Users/matchima/Documents/imagesproduct/bag/b9.3.jpg'),(110,1,'Le Chiquito long','Long leather handbag.','690 eur','660 eur','90','/Users/matchima/Documents/imagesproduct/bag/b10.1.jpg','/Users/matchima/Documents/imagesproduct/bag/b10.2.jpg','/Users/matchima/Documents/imagesproduct/bag/b10.3.jpg'),(111,1,'Le Bisou Perle','Beaded shoulder bag.','620 eur','600 eur','60','/Users/matchima/Documents/imagesproduct/bag/b11.1.jpg','/Users/matchima/Documents/imagesproduct/bag/b11.2.jpg','/Users/matchima/Documents/imagesproduct/bag/b11.3.jpg'),(112,1,'Le Bambino long','Long flap.','850 eur','800 eur','60','/Users/matchima/Documents/imagesproduct/bag/b12.1.jpg','/Users/matchima/Documents/imagesproduct/bag/b12.2.jpg','/Users/matchima/Documents/imagesproduct/bag/b12.3.jpg'),(201,2,'La robe Cubo','Structured square dress.','1120 eur','1000 eur','120','/Users/matchima/Documents/imagesproduct/top/t1.1.jpg','/Users/matchima/Documents/imagesproduct/top/t1.2.jpg','/Users/matchima/Documents/imagesproduct/top/t1.3.jpg'),(202,2,'La chemise Pablo','Asymmetric shirt','450 eur','420 eur','120','/Users/matchima/Documents/imagesproduct/top/t2.1.jpg','/Users/matchima/Documents/imagesproduct/top/t2.2.jpg','/Users/matchima/Documents/imagesproduct/top/t2.3.jpg'),(203,2,'Le haut maille plissé','Folded tank top.','1250 eur','1150 eur','500','/Users/matchima/Documents/imagesproduct/top/t3.1.jpg','/Users/matchima/Documents/imagesproduct/top/t3.2.jpg','/Users/matchima/Documents/imagesproduct/top/t3.3.jpg'),(204,2,'Le t-shirt Bahia court','Twisted t-shirt.','680 eur','580eur','120','/Users/matchima/Documents/imagesproduct/top/t4.1.jpg','/Users/matchima/Documents/imagesproduct/top/t4.2.jpg','/Users/matchima/Documents/imagesproduct/top/t4.3.jpg'),(205,2,'La maille Jacquemus','Cardigan sweater','1400 eur','1320 eur','430','/Users/matchima/Documents/imagesproduct/top/t5.1.jpg','/Users/matchima/Documents/imagesproduct/top/t5.2.jpg','/Users/matchima/Documents/imagesproduct/top/t5.3.jpg'),(206,2,'Le t-shirt Sierra',' Long sleeve lingerie t-shirt.','700 eur','500 eur','80','/Users/matchima/Documents/imagesproduct/top/t6.1.jpg','/Users/matchima/Documents/imagesproduct/top/t6.2.jpg','/Users/matchima/Documents/imagesproduct/top/t6.3.jpg'),(207,2,'Le t-shirt Jacquemus x Pepo Moreno','Just Two Suns Holding Hands t-shirt by Jacquemus x Pepo Moreno.','800 eur','750 eur','900','/Users/matchima/Documents/imagesproduct/top/t7.1.jpg','/Users/matchima/Documents/imagesproduct/top/t7.2.jpg','/Users/matchima/Documents/imagesproduct/top/t7.3.jpg'),(208,2,'La chemise de costume','Suit shirt.','550 eur','490 eur','530','/Users/matchima/Documents/imagesproduct/top/t8.1.jpg','/Users/matchima/Documents/imagesproduct/top/t8.2.jpg','/Users/matchima/Documents/imagesproduct/top/t8.3.jpg'),(209,2,'Le blouson Salti','Trench bomber.','1200 eur','1150 eur','280','/Users/matchima/Documents/imagesproduct/top/t9.1.jpg','/Users/matchima/Documents/imagesproduct/top/t9.2.jpg','/Users/matchima/Documents/imagesproduct/top/t9.3.jpg'),(210,2,'La chemise de-Nîmes','Boxy denim shirt.','790 eur','700 eur','600','/Users/matchima/Documents/imagesproduct/top/t10.1.jpg','/Users/matchima/Documents/imagesproduct/top/t10.2.jpg','/Users/matchima/Documents/imagesproduct/top/t10.3.jpg'),(211,2,'Le pull Torsade','Honeycomb sweater.','1450 eur','1350 eur','520','/Users/matchima/Documents/imagesproduct/top/t11.1.jpg','/Users/matchima/Documents/imagesproduct/top/t11.2.jpg','/Users/matchima/Documents/imagesproduct/top/t11.3.jpg'),(212,2,'Le t-shirt Bahia court','Pleated cardigan.','850 eur','800 eur','400','/Users/matchima/Documents/imagesproduct/top/t12.1.jpg','/Users/matchima/Documents/imagesproduct/top/t12.2.jpg','/Users/matchima/Documents/imagesproduct/top/t12.3.jpg'),(301,3,'Les doubles sandales','Double sandals.','850 eur','825 eur','600','/Users/matchima/Documents/imagesproduct/shoes/s1.1.jpg','/Users/matchima/Documents/imagesproduct/shoes/s1.2.jpg','/Users/matchima/Documents/imagesproduct/shoes/s1.3.jpg'),(302,3,'Les slingbacks Cubisto hautes','Sling-back pumps.','750 eur','700 eur','450','/Users/matchima/Documents/imagesproduct/shoes/s2.1.jpg','/Users/matchima/Documents/imagesproduct/shoes/s2.2.jpg','/Users/matchima/Documents/imagesproduct/shoes/s2.3.jpg'),(303,3,'Les slingbacks Cubisto basses','Sling-back kitten heels.','650 eur','630 eur','210','/Users/matchima/Documents/imagesproduct/shoes/s3.1.jpg','/Users/matchima/Documents/imagesproduct/shoes/s3.2.jpg','/Users/matchima/Documents/imagesproduct/shoes/s3.3.jpg'),(304,3,'Les Zizi Repetto Jacquemus','Square edge derbies - re-interpretation of the iconic Zizi by Repetto.','450 eur','420 eur','100','/Users/matchima/Documents/imagesproduct/shoes/s4.1.jpg','/Users/matchima/Documents/imagesproduct/shoes/s4.2.jpg','/Users/matchima/Documents/imagesproduct/shoes/s4.3.jpg'),(305,3,'La Daddy','Soft sneakers.','550 eur','525 eur','750','/Users/matchima/Documents/imagesproduct/shoes/s5.1.jpg','/Users/matchima/Documents/imagesproduct/shoes/s5.2.jpg','/Users/matchima/Documents/imagesproduct/shoes/s5.3.jpg'),(306,3,'Les slingbacks Duelo hautes','Circle square pumps.','750 eur','700 eur','500','/Users/matchima/Documents/imagesproduct/shoes/s6.1.jpg','/Users/matchima/Documents/imagesproduct/shoes/s6.2.jpg','/Users/matchima/Documents/imagesproduct/shoes/s6.3.jpg'),(307,3,'Les mules plates Ballet','Ballerina mules.','540 eur','530 eur','1000','/Users/matchima/Documents/imagesproduct/shoes/s7.1.jpg','/Users/matchima/Documents/imagesproduct/shoes/s7.2.jpg','/Users/matchima/Documents/imagesproduct/shoes/s7.3.jpg'),(308,3,'Les bateau Pavane','Double boat shoes.','340 eur','300 eur','620','/Users/matchima/Documents/imagesproduct/shoes/s8.1.jpg','/Users/matchima/Documents/imagesproduct/shoes/s8.2.jpg','/Users/matchima/Documents/imagesproduct/shoes/s8.3.jpg'),(309,3,'Les derbies Pavane','Double derbies.','650 eur','645 eur','2300','/Users/matchima/Documents/imagesproduct/shoes/s9.1.jpg','/Users/matchima/Documents/imagesproduct/shoes/s9.2.jpg','/Users/matchima/Documents/imagesproduct/shoes/s9.3.jpg'),(310,3,'Les slingbacks Duelo plates','Circle square flats.','590 eur','550 eur','220','/Users/matchima/Documents/imagesproduct/shoes/s10.1.jpg','/Users/matchima/Documents/imagesproduct/shoes/s10.2.jpg','/Users/matchima/Documents/imagesproduct/shoes/s10.3.jpg'),(311,3,'Les slingbacks Duelo basses','Circle square kitten heels.','650 eur','600 eur','720','/Users/matchima/Documents/imagesproduct/shoes/s11.1.jpg','/Users/matchima/Documents/imagesproduct/shoes/s11.2.jpg','/Users/matchima/Documents/imagesproduct/shoes/s11.3.jpg'),(312,3,'Les sandales Regalo','Circle square sling-backs.','690 eur','650 eur','1220','/Users/matchima/Documents/imagesproduct/shoes/s12.1.jpg','/Users/matchima/Documents/imagesproduct/shoes/s12.2.jpg','/Users/matchima/Documents/imagesproduct/shoes/s12.3.jpg'),(401,4,'Le short maille plissé','Pleated mini shorts.','340 eur','300eur','620','/Users/matchima/Documents/imagesproduct/trousers/ts1.1.jpg','/Users/matchima/Documents/imagesproduct/trousers/ts1.2.jpg','/Users/matchima/Documents/imagesproduct/trousers/ts1.3.jpg'),(402,4,'Le de-Nîmes large','Oversized jeans','450 eur','430 eur','740','/Users/matchima/Documents/imagesproduct/trousers/ts2.1.jpg','/Users/matchima/Documents/imagesproduct/trousers/ts2.2.jpg','/Users/matchima/Documents/imagesproduct/trousers/ts2.3.jpg'),(403,4,'Le de-Nîmes Ovalo','Wide curved jeans.','490 eur','480 eur','100','/Users/matchima/Documents/imagesproduct/trousers/ts3.1.jpg','/Users/matchima/Documents/imagesproduct/trousers/ts3.2.jpg','/Users/matchima/Documents/imagesproduct/trousers/ts3.3.jpg'),(404,4,'Le pantalon Sauge','High-waisted flare pants','590 eur','550 eur','350','/Users/matchima/Documents/imagesproduct/trousers/ts4.1.jpg','/Users/matchima/Documents/imagesproduct/trousers/ts4.2.jpg','/Users/matchima/Documents/imagesproduct/trousers/ts4.3.jpg'),(405,4,'Le de-Nîmes droit','Straight leg jeans.','420 eur','400 eur','150','/Users/matchima/Documents/imagesproduct/trousers/ts5.1.jpg','/Users/matchima/Documents/imagesproduct/trousers/ts5.2.jpg','/Users/matchima/Documents/imagesproduct/trousers/ts6.3.jpg'),(406,4,'Le pantalon Tibau','Slit pants.','740 eur','700 eur','420','/Users/matchima/Documents/imagesproduct/trousers/ts6.1.jpg','/Users/matchima/Documents/imagesproduct/trousers/ts6.2.jpg','/Users/matchima/Documents/imagesproduct/trousers/ts6.3.jpg'),(407,4,'Le cargo Marrone','Zipped cargo pants.','590 eur','580 eur','190','/Users/matchima/Documents/imagesproduct/trousers/ts7.1.jpg','/Users/matchima/Documents/imagesproduct/trousers/ts7.2.jpg','/Users/matchima/Documents/imagesproduct/trousers/ts7.3.jpg'),(408,4,'Le pantalon de-Nîmes Bell','Ultra wide jeans.','550 eur','510 eur','400','/Users/matchima/Documents/imagesproduct/trousers/ts8.1.jpg','/Users/matchima/Documents/imagesproduct/trousers/ts8.2.jpg','/Users/matchima/Documents/imagesproduct/trousers/ts8.3.jpg'),(409,4,'Le short Marrone','Zipped cargo shorts.','490 eur','475 eur','820','/Users/matchima/Documents/imagesproduct/trousers/ts9.1.jpg','/Users/matchima/Documents/imagesproduct/trousers/ts9.2.jpg','/Users/matchima/Documents/imagesproduct/trousers/ts9.3.jpg'),(410,4,'Le pantalon Salti','Loose pleated pants.','590 eur','580 eur','420','/Users/matchima/Documents/imagesproduct/trousers/ts10.1.jpg','/Users/matchima/Documents/imagesproduct/trousers/ts10.2.jpg','/Users/matchima/Documents/imagesproduct/trousers/ts10.3.jpg'),(411,4,'Le pantalon Melo','Straight pants.','590 eur','560 eur','1200','/Users/matchima/Documents/imagesproduct/trousers/ts11.1.jpg','/Users/matchima/Documents/imagesproduct/trousers/ts11.2.jpg','/Users/matchima/Documents/imagesproduct/trousers/ts11.3.jpg'),(412,4,'Le bermuda Juego','Oversized shorts.','690 eur','650 eur','400','/Users/matchima/Documents/imagesproduct/trousers/ts12.1.jpg','/Users/matchima/Documents/imagesproduct/trousers/ts12.2.jpg','/Users/matchima/Documents/imagesproduct/trousers/ts12.3.jpg');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registcus`
--

DROP TABLE IF EXISTS `registcus`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registcus` (
  `registcus_id` int NOT NULL,
  `email` varchar(100) NOT NULL,
  `firstname` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `confirm_pass` varchar(100) NOT NULL,
  PRIMARY KEY (`registcus_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registcus`
--

LOCK TABLES `registcus` WRITE;
/*!40000 ALTER TABLE `registcus` DISABLE KEYS */;
/*!40000 ALTER TABLE `registcus` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `registmyshop`
--

DROP TABLE IF EXISTS `registmyshop`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `registmyshop` (
  `registmyshop_id` int NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `firstname` varchar(100) DEFAULT NULL,
  `lastname` varchar(100) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `confirmpassword` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`registmyshop_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `registmyshop`
--

LOCK TABLES `registmyshop` WRITE;
/*!40000 ALTER TABLE `registmyshop` DISABLE KEYS */;
/*!40000 ALTER TABLE `registmyshop` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `wishlist`
--

DROP TABLE IF EXISTS `wishlist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `wishlist` (
  `wishlistIds` int NOT NULL AUTO_INCREMENT,
  `product_id` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`wishlistIds`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `wishlist`
--

LOCK TABLES `wishlist` WRITE;
/*!40000 ALTER TABLE `wishlist` DISABLE KEYS */;
INSERT INTO `wishlist` VALUES (1,'402'),(2,'401'),(3,'202');
/*!40000 ALTER TABLE `wishlist` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-19 17:41:05
