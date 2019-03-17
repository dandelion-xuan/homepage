/*
Navicat MySQL Data Transfer

Source Server         : vimiLocal
Source Server Version : 50725
Source Host           : 192.168.1.4:3307
Source Database       : homepage

Target Server Type    : MYSQL
Target Server Version : 50725
File Encoding         : 65001

Date: 2019-03-17 17:29:42
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for dia_category
-- ----------------------------
DROP TABLE IF EXISTS `dia_category`;
CREATE TABLE `dia_category` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(20) DEFAULT NULL,
  `diaNum` int(11) DEFAULT '0',
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dia_category
-- ----------------------------
INSERT INTO `dia_category` VALUES ('12', 'learning', '10', '1');
INSERT INTO `dia_category` VALUES ('14', 'learning', '0', '1');
INSERT INTO `dia_category` VALUES ('15', 'learning', '0', '1');
INSERT INTO `dia_category` VALUES ('16', 'math', '2', '1');
INSERT INTO `dia_category` VALUES ('17', 'sun', '1', '6');
INSERT INTO `dia_category` VALUES ('18', 'sun1', '3', '6');
INSERT INTO `dia_category` VALUES ('19', 'sun2', '1', '6');
INSERT INTO `dia_category` VALUES ('20', 'sun3', '1', '6');
INSERT INTO `dia_category` VALUES ('21', 'sun1', '0', '6');
INSERT INTO `dia_category` VALUES ('22', 'love', '1', '1');

-- ----------------------------
-- Table structure for dia_comment
-- ----------------------------
DROP TABLE IF EXISTS `dia_comment`;
CREATE TABLE `dia_comment` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `postDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `content` varchar(200) DEFAULT NULL,
  `dia_id` int(11) DEFAULT NULL,
  `critic_id` int(11) DEFAULT NULL,
  `critic_name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dia_comment
-- ----------------------------
INSERT INTO `dia_comment` VALUES ('1', '2019-03-17 10:11:36', 'hello nice to meet you,too', '12', '6', 'dandelion');
INSERT INTO `dia_comment` VALUES ('2', '2019-03-17 15:30:56', 'coding', '3', '1', 'admin');

-- ----------------------------
-- Table structure for dia_tag
-- ----------------------------
DROP TABLE IF EXISTS `dia_tag`;
CREATE TABLE `dia_tag` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(20) DEFAULT NULL,
  `diaNum` int(11) DEFAULT NULL,
  `dia_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dia_tag
-- ----------------------------

-- ----------------------------
-- Table structure for diary
-- ----------------------------
DROP TABLE IF EXISTS `diary`;
CREATE TABLE `diary` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `uploadDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `title` varchar(20) DEFAULT NULL,
  `content` varchar(3000) DEFAULT NULL,
  `commentNum` int(11) DEFAULT '0',
  `user_id` int(11) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  `tag_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of diary
-- ----------------------------
INSERT INTO `diary` VALUES ('4', '2019-03-13 19:27:19', 'hello1', 'I am doing', '0', '1', '12', null);
INSERT INTO `diary` VALUES ('5', '2019-03-13 19:29:19', 'hello2', 'the same category,now the diaNum should be 2 in dia_category table', '0', '1', '12', null);
INSERT INTO `diary` VALUES ('6', '2019-03-13 19:35:46', 'hello2', 'the same category,now the diaNum should be 6 in dia_category table', '0', '1', '12', null);
INSERT INTO `diary` VALUES ('7', '2019-03-13 19:36:54', 'hello2', 'the same category,now the diaNum should be 6 in dia_category table', '0', '1', '12', null);
INSERT INTO `diary` VALUES ('8', '2019-03-13 19:38:31', 'hello2', 'the same category,now the diaNum should be 6 in dia_category table', '0', '1', '12', null);
INSERT INTO `diary` VALUES ('9', '2019-03-13 19:58:41', 'hello2', 'the same category,now the diaNum should be 6 in dia_category table', '0', '1', '12', null);
INSERT INTO `diary` VALUES ('10', '2019-03-13 20:03:19', 'math1', 'I am doing math1', '0', '1', '16', null);
INSERT INTO `diary` VALUES ('11', '2019-03-13 20:04:08', 'math2', 'I am doing math1', '0', '1', '16', null);
INSERT INTO `diary` VALUES ('12', '2019-03-17 10:11:36', 'happy', '欢迎使用 wangEditor 富文本编辑器', '1', '6', '17', null);
INSERT INTO `diary` VALUES ('13', '2019-03-13 21:48:48', 'happy', '欢迎使用 wangEditor 富文本编辑器', '0', '6', '18', null);
INSERT INTO `diary` VALUES ('14', '2019-03-13 21:49:18', 'happy', '欢迎使用 wangEditor 富文本编辑器', '0', '6', '19', null);
INSERT INTO `diary` VALUES ('15', '2019-03-13 21:50:11', 'happy', '欢迎使用 wangEditor 富文本编辑器', '0', '6', '20', null);
INSERT INTO `diary` VALUES ('16', '2019-03-13 22:29:58', 'sun1', 'Iterates through the array displaying each number as both a word and numeral&nbsp;&nbsp;', '0', '6', '18', null);
INSERT INTO `diary` VALUES ('17', '2019-03-13 22:32:16', 'sun1', 'Iterates through the array displaying each number as both a word and numeral&nbsp;&nbsp;', '0', '6', '18', null);
INSERT INTO `diary` VALUES ('18', '2019-03-16 23:41:55', 'happy day', 'how are you.Fine,thanks.&nbsp;&nbsp;', '0', '1', '12', null);
INSERT INTO `diary` VALUES ('19', '2019-03-16 23:42:15', 'happy day', 'how are you.Fine,thanks.&nbsp;&nbsp;', '0', '1', '22', null);

-- ----------------------------
-- Table structure for mind
-- ----------------------------
DROP TABLE IF EXISTS `mind`;
CREATE TABLE `mind` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `uploadDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `content` varchar(200) DEFAULT NULL,
  `commentNum` int(11) DEFAULT '0',
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of mind
-- ----------------------------
INSERT INTO `mind` VALUES ('1', '2019-03-13 15:33:22', '111', '0', '1');
INSERT INTO `mind` VALUES ('2', '2019-03-13 15:33:22', 'asdsdfdsfd', '0', '1');
INSERT INTO `mind` VALUES ('3', '2019-03-15 15:53:14', 'I love you', '1', '1');
INSERT INTO `mind` VALUES ('4', '2019-03-17 10:07:50', 'hello nice to meet you', '2', '6');
INSERT INTO `mind` VALUES ('5', '2019-03-16 23:43:17', 'test 4', '4', '1');
INSERT INTO `mind` VALUES ('6', '2019-03-16 22:21:17', '哈哈哈哈哈', '9', '1');

-- ----------------------------
-- Table structure for mind_comment
-- ----------------------------
DROP TABLE IF EXISTS `mind_comment`;
CREATE TABLE `mind_comment` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `postDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `content` varchar(200) DEFAULT NULL,
  `mind_id` int(11) DEFAULT NULL,
  `critic_id` int(11) DEFAULT NULL,
  `critic_name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of mind_comment
-- ----------------------------
INSERT INTO `mind_comment` VALUES ('1', '2019-03-16 21:53:33', 'hello morning', '6', '1', 'admin');
INSERT INTO `mind_comment` VALUES ('2', '2019-03-16 21:53:33', '哈哈哈', '6', '1', 'admin');
INSERT INTO `mind_comment` VALUES ('3', '2019-03-16 21:53:33', '嘿嘿', '6', '1', 'admin');
INSERT INTO `mind_comment` VALUES ('4', '2019-03-16 21:53:33', '胜多负少的', '6', '1', 'admin');
INSERT INTO `mind_comment` VALUES ('5', '2019-03-16 21:53:33', '胜多负少的', '6', '1', 'admin');
INSERT INTO `mind_comment` VALUES ('6', '2019-03-16 21:53:33', '胜多负少的', '6', '1', 'admin');
INSERT INTO `mind_comment` VALUES ('7', '2019-03-16 21:53:33', 'thaks', '6', '1', 'admin');
INSERT INTO `mind_comment` VALUES ('8', '2019-03-16 21:53:33', 'thaks', '6', '1', 'admin');
INSERT INTO `mind_comment` VALUES ('9', '2019-03-16 21:53:33', 'thanks', '3', '1', 'admin');
INSERT INTO `mind_comment` VALUES ('10', '2019-03-16 21:53:33', 'thanks', '5', '1', 'admin');
INSERT INTO `mind_comment` VALUES ('11', '2019-03-16 22:01:48', 'hello morning', '5', '2', 'zhulixuan');
INSERT INTO `mind_comment` VALUES ('12', '2019-03-16 22:01:16', 'hello morning', '5', '2', 'zhulixuan');
INSERT INTO `mind_comment` VALUES ('13', '2019-03-16 22:21:17', '66666', '6', '1', 'admin');
INSERT INTO `mind_comment` VALUES ('14', '2019-03-16 23:43:17', 'give me fight.', '5', '1', 'admin');
INSERT INTO `mind_comment` VALUES ('15', '2019-03-17 10:05:59', 'hello nice to meet you,too', '4', '6', 'dandelion');
INSERT INTO `mind_comment` VALUES ('16', '2019-03-17 10:07:05', 'hello nice to meet you,too', '4', '6', 'dandelion');

-- ----------------------------
-- Table structure for pic_category
-- ----------------------------
DROP TABLE IF EXISTS `pic_category`;
CREATE TABLE `pic_category` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(20) DEFAULT NULL,
  `picNum` int(11) DEFAULT NULL,
  `pic_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pic_category
-- ----------------------------

-- ----------------------------
-- Table structure for pic_comment
-- ----------------------------
DROP TABLE IF EXISTS `pic_comment`;
CREATE TABLE `pic_comment` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `postDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `content` varchar(200) DEFAULT NULL,
  `pic_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pic_comment
-- ----------------------------

-- ----------------------------
-- Table structure for picture
-- ----------------------------
DROP TABLE IF EXISTS `picture`;
CREATE TABLE `picture` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `uploadDate` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `title` varchar(20) DEFAULT NULL,
  `description` varchar(30) DEFAULT NULL,
  `commentNum` int(11) DEFAULT '0',
  `user_id` int(11) NOT NULL,
  `category_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of picture
-- ----------------------------

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) DEFAULT NULL,
  `password` varchar(20) DEFAULT NULL,
  `email` varchar(20) DEFAULT NULL,
  `registTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'admin', 'stupidone', 'vimiming@gmail.com', '2019-03-06 05:17:01');
INSERT INTO `user` VALUES ('2', 'zhulixuan', 'stupidone', 'zhulixuan@gmail.com', '2019-03-06 16:06:26');
INSERT INTO `user` VALUES ('3', 'zhulixuan', 'stupidone', 'zhulixuan@163.com', '2019-03-06 16:49:39');
INSERT INTO `user` VALUES ('4', 'zhulixuan', 'stupidone', 'zhulixuan@126.com', '2019-03-06 16:51:45');
INSERT INTO `user` VALUES ('5', 'zhulixuan', 'stupidone', 'zhulixuan@hh.com', '2019-03-06 16:54:19');
INSERT INTO `user` VALUES ('6', 'dandelion', '12345', 'dandelion@gmail.com', '2019-03-13 15:11:00');
