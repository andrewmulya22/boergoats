-- MySQL dump 10.13  Distrib 8.0.20, for Win64 (x86_64)
--
-- Host: localhost    Database: boer_goats
-- ------------------------------------------------------
-- Server version	8.0.20

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
-- Table structure for table `boer_info`
--

DROP TABLE IF EXISTS `boer_info`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `boer_info` (
  `id` int unsigned DEFAULT NULL,
  `name` varchar(30) DEFAULT NULL,
  `jenis_kel` varchar(15) NOT NULL,
  `tanggal_lahir` datetime DEFAULT NULL,
  `father_name` varchar(30) DEFAULT NULL,
  `father_id` int unsigned DEFAULT NULL,
  `mother_name` varchar(30) DEFAULT NULL,
  `mother_id` int unsigned DEFAULT NULL,
  `berat_lahir` decimal(6,2) unsigned DEFAULT NULL,
  `tanggal_sapih` datetime DEFAULT NULL,
  `berat_1bln` decimal(6,2) unsigned DEFAULT NULL,
  `berat_3bln` decimal(6,2) unsigned DEFAULT NULL,
  `berat_6bln` decimal(6,2) unsigned DEFAULT NULL,
  `berat_1thn` decimal(6,2) unsigned DEFAULT NULL,
  UNIQUE KEY `id` (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `boer_info`
--

LOCK TABLES `boer_info` WRITE;
/*!40000 ALTER TABLE `boer_info` DISABLE KEYS */;
INSERT INTO `boer_info` VALUES (1,'Jack','Laki-laki','2018-07-26 00:00:00','Micathel Jeti',7071,'Micathel Birdy',6138,3.21,'2019-01-01 00:00:00',NULL,18.00,NULL,40.00),(7071,'Micathel Jeti','Laki-laki','2017-08-28 00:00:00','Micathel Leahyman',NULL,'Micathel Kari',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(6138,'Micathel Birdy','Perempuan','2016-09-26 00:00:00','Micathel Chuggington',NULL,'Micathel Satsnice',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,'Micathel Leahyman','Laki-laki',NULL,'Micathel Philby',NULL,'Valterra',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,'Micathel Kari','Perempuan',NULL,'Karreman',NULL,'Charisma',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,'Micathel Philby','Laki-laki',NULL,'Davel Callum',NULL,'Filly',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,'Valterra','Perempuan',NULL,'Micathel Merlin',NULL,'Valeska',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,'Karreman','Laki-laki',NULL,'Personality',NULL,'Barcelona',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(NULL,'Charisma','Perempuan',NULL,'Epee',NULL,'Columbine',NULL,NULL,NULL,NULL,NULL,NULL,NULL),(7060,'Micathel Droppem','Laki-laki','2017-08-26 00:00:00','Micathel Leahyman',NULL,'Veronika',NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `boer_info` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `farmtag`
--

DROP TABLE IF EXISTS `farmtag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `farmtag` (
  `NO` int NOT NULL AUTO_INCREMENT,
  `MINTAG` int DEFAULT NULL,
  `MAXTAG` int DEFAULT NULL,
  `FARMNAME` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`NO`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `farmtag`
--

LOCK TABLES `farmtag` WRITE;
/*!40000 ALTER TABLE `farmtag` DISABLE KEYS */;
INSERT INTO `farmtag` VALUES (1,NULL,NULL,NULL),(2,NULL,NULL,NULL),(3,NULL,NULL,NULL),(4,NULL,NULL,NULL),(5,NULL,NULL,NULL),(6,NULL,NULL,NULL),(7,NULL,NULL,NULL),(8,NULL,NULL,NULL),(9,NULL,NULL,NULL),(10,NULL,NULL,NULL),(11,3,12,'asdes');
/*!40000 ALTER TABLE `farmtag` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-09-14 13:51:43
