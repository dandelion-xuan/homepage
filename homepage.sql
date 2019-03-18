/*
Navicat MySQL Data Transfer

Source Server         : localhost
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : homepage

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2019-03-18 23:47:15
*/

SET FOREIGN_KEY_CHECKS=0;

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
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of diary
-- ----------------------------
INSERT INTO `diary` VALUES ('4', '2019-03-13 19:27:19', 'hello1', 'I am doing', '0', '1', '12', null);
INSERT INTO `diary` VALUES ('5', '2019-03-13 19:29:19', 'hello2', 'the same category,now the diaNum should be 2 in dia_category table', '0', '1', '12', null);
INSERT INTO `diary` VALUES ('6', '2019-03-13 19:35:46', 'hello2', 'the same category,now the diaNum should be 6 in dia_category table', '0', '1', '12', null);
INSERT INTO `diary` VALUES ('7', '2019-03-13 19:36:54', 'hello2', 'the same category,now the diaNum should be 6 in dia_category table', '0', '1', '12', null);
INSERT INTO `diary` VALUES ('8', '2019-03-13 19:38:31', 'hello2', 'the same category,now the diaNum should be 6 in dia_category table', '0', '1', '12', null);
INSERT INTO `diary` VALUES ('9', '2019-03-18 16:43:05', 'hello2', 'the same category,now the diaNum should be 6 in dia_category table', '1', '1', '12', null);
INSERT INTO `diary` VALUES ('10', '2019-03-18 16:44:11', 'math1', 'I am doing math1', '1', '1', '16', null);
INSERT INTO `diary` VALUES ('11', '2019-03-18 16:44:04', 'math2', 'I am doing math1', '1', '1', '16', null);
INSERT INTO `diary` VALUES ('12', '2019-03-17 10:11:36', 'happy', '欢迎使用 wangEditor 富文本编辑器', '1', '6', '17', null);
INSERT INTO `diary` VALUES ('13', '2019-03-13 21:48:48', 'happy', '欢迎使用 wangEditor 富文本编辑器', '0', '6', '18', null);
INSERT INTO `diary` VALUES ('14', '2019-03-13 21:49:18', 'happy', '欢迎使用 wangEditor 富文本编辑器', '0', '6', '19', null);
INSERT INTO `diary` VALUES ('15', '2019-03-13 21:50:11', 'happy', '欢迎使用 wangEditor 富文本编辑器', '0', '6', '20', null);
INSERT INTO `diary` VALUES ('16', '2019-03-13 22:29:58', 'sun1', 'Iterates through the array displaying each number as both a word and numeral&nbsp;&nbsp;', '0', '6', '18', null);
INSERT INTO `diary` VALUES ('17', '2019-03-13 22:32:16', 'sun1', 'Iterates through the array displaying each number as both a word and numeral&nbsp;&nbsp;', '0', '6', '18', null);
INSERT INTO `diary` VALUES ('18', '2019-03-16 23:41:55', 'happy day', 'how are you.Fine,thanks.&nbsp;&nbsp;', '0', '1', '12', null);
INSERT INTO `diary` VALUES ('19', '2019-03-18 16:49:57', 'happy day', 'how are you.Fine,thanks.&nbsp;&nbsp;', '2', '1', '22', null);
INSERT INTO `diary` VALUES ('20', '2019-03-18 16:42:36', 'happyCSDN ', 'window.location.reload()刷新当前页面.parent.location.reload()刷新父亲对象（用于框架）opener.location.reload()刷新父窗口对象（用于单开窗口）top.location.reload()刷新最顶端对象（用于多开窗口）--------------------- 作者：IT_LOSER 来源：CSDN 原文：https://blog.csdn.net/it_loser/article/details/51542999 版权声明：本文为博主原创文章，转载请附上博文链接！', '1', '1', '12', null);
INSERT INTO `diary` VALUES ('21', '2019-03-18 21:29:34', 'happy', '欢迎使用 wangEditor 富文本编辑器.,;ljhkhjhj', '1', '1', '12', null);
INSERT INTO `diary` VALUES ('22', '2019-03-18 20:25:14', 'happy', '#include &lt;stdio.h&gt;int main() {&nbsp; &nbsp;}', '0', '1', '12', null);
INSERT INTO `diary` VALUES ('23', '2019-03-18 21:13:15', '换行吧', '<p>哈哈哈哈</p><p>金发地飞机</p><p>哦if聚合物饿哦IE竟然覅</p><p><br></p>', '5', '1', '22', null);

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
INSERT INTO `dia_category` VALUES ('12', 'learning', '13', '1');
INSERT INTO `dia_category` VALUES ('14', 'learning', '0', '1');
INSERT INTO `dia_category` VALUES ('15', 'learning', '0', '1');
INSERT INTO `dia_category` VALUES ('16', 'math', '2', '1');
INSERT INTO `dia_category` VALUES ('17', 'sun', '1', '6');
INSERT INTO `dia_category` VALUES ('18', 'sun1', '3', '6');
INSERT INTO `dia_category` VALUES ('19', 'sun2', '1', '6');
INSERT INTO `dia_category` VALUES ('20', 'sun3', '1', '6');
INSERT INTO `dia_category` VALUES ('21', 'sun1', '0', '6');
INSERT INTO `dia_category` VALUES ('22', 'love', '2', '1');

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
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dia_comment
-- ----------------------------
INSERT INTO `dia_comment` VALUES ('1', '2019-03-17 10:11:36', 'hello nice to meet you,too', '12', '6', 'dandelion');
INSERT INTO `dia_comment` VALUES ('2', '2019-03-17 15:30:56', 'coding', '3', '1', 'admin');
INSERT INTO `dia_comment` VALUES ('3', '2019-03-18 16:42:36', 'good!', '20', '1', 'admin');
INSERT INTO `dia_comment` VALUES ('4', '2019-03-18 16:43:05', 'good!', '9', '1', 'admin');
INSERT INTO `dia_comment` VALUES ('5', '2019-03-18 16:44:04', 'good!', '11', '1', 'admin');
INSERT INTO `dia_comment` VALUES ('6', '2019-03-18 16:44:11', 'good!', '10', '1', 'admin');
INSERT INTO `dia_comment` VALUES ('7', '2019-03-18 16:48:09', 'sdafd', '19', '1', 'admin');
INSERT INTO `dia_comment` VALUES ('8', '2019-03-18 16:49:57', 'sasds', '19', '1', 'admin');
INSERT INTO `dia_comment` VALUES ('9', '2019-03-18 20:58:34', 'sdfsdfsdffdsf', '23', '1', 'admin');
INSERT INTO `dia_comment` VALUES ('10', '2019-03-18 21:00:56', 'qweqw', '23', '1', 'admin');
INSERT INTO `dia_comment` VALUES ('11', '2019-03-18 21:07:52', '123', '23', '1', 'admin');
INSERT INTO `dia_comment` VALUES ('12', '2019-03-18 21:09:27', '2344', '23', '1', 'admin');
INSERT INTO `dia_comment` VALUES ('13', '2019-03-18 21:13:15', 'adsd', '23', '1', 'admin');
INSERT INTO `dia_comment` VALUES ('14', '2019-03-18 21:29:33', 'assa', '21', '1', 'admin');

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
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of mind
-- ----------------------------
INSERT INTO `mind` VALUES ('1', '2019-03-18 12:51:43', '111', '5', '1');
INSERT INTO `mind` VALUES ('2', '2019-03-13 15:33:22', 'asdsdfdsfd', '0', '1');
INSERT INTO `mind` VALUES ('3', '2019-03-18 12:51:37', 'I love you', '2', '1');
INSERT INTO `mind` VALUES ('4', '2019-03-18 11:45:19', 'hello nice to meet you', '3', '6');
INSERT INTO `mind` VALUES ('5', '2019-03-18 12:36:12', 'test 4', '5', '1');
INSERT INTO `mind` VALUES ('6', '2019-03-16 22:21:17', '哈哈哈哈哈', '9', '1');
INSERT INTO `mind` VALUES ('7', '2019-03-18 12:49:31', '', '18', '1');
INSERT INTO `mind` VALUES ('8', '2019-03-18 12:52:04', '哈哈哈哈呵呵呵呵', '0', '1');
INSERT INTO `mind` VALUES ('9', '2019-03-18 16:45:53', '', '1', '1');
INSERT INTO `mind` VALUES ('10', '2019-03-18 16:45:30', '打的费', '2', '1');
INSERT INTO `mind` VALUES ('11', '2019-03-18 16:44:04', '大师傅', '3', '1');

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
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8;

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
INSERT INTO `mind_comment` VALUES ('17', '2019-03-18 11:19:43', 'gggg', '7', '1', 'admin');
INSERT INTO `mind_comment` VALUES ('18', '2019-03-18 11:20:53', 'hhh', '7', '1', 'admin');
INSERT INTO `mind_comment` VALUES ('19', '2019-03-18 11:45:19', 'hello nice to meet you,too', '4', '1', 'admin');
INSERT INTO `mind_comment` VALUES ('20', '2019-03-18 11:51:08', 'black', '7', '1', 'admin');
INSERT INTO `mind_comment` VALUES ('21', '2019-03-18 11:52:59', 'ffff', '7', '1', 'admin');
INSERT INTO `mind_comment` VALUES ('22', '2019-03-18 11:53:51', 'aaaa', '7', '1', 'admin');
INSERT INTO `mind_comment` VALUES ('23', '2019-03-18 11:54:45', 'dddd', '7', '1', 'admin');
INSERT INTO `mind_comment` VALUES ('24', '2019-03-18 12:34:38', 'xxxxxxx', '1', '1', 'admin');
INSERT INTO `mind_comment` VALUES ('25', '2019-03-18 12:35:12', 'fgdfgd', '1', '1', 'admin');
INSERT INTO `mind_comment` VALUES ('26', '2019-03-18 12:36:12', 'asd', '5', '1', 'admin');
INSERT INTO `mind_comment` VALUES ('27', '2019-03-18 12:36:21', 'sgasdf', '7', '1', 'admin');
INSERT INTO `mind_comment` VALUES ('28', '2019-03-18 12:36:48', 'sdfd', '7', '1', 'admin');
INSERT INTO `mind_comment` VALUES ('29', '2019-03-18 12:37:51', 'dfdsf', '7', '1', 'admin');
INSERT INTO `mind_comment` VALUES ('30', '2019-03-18 12:38:56', 'sad', '7', '1', 'admin');
INSERT INTO `mind_comment` VALUES ('31', '2019-03-18 12:41:15', 'DASD', '7', '1', 'admin');
INSERT INTO `mind_comment` VALUES ('32', '2019-03-18 12:43:06', '艾斯德斯的', '7', '1', 'admin');
INSERT INTO `mind_comment` VALUES ('33', '2019-03-18 12:44:16', '水电费', '7', '1', 'admin');
INSERT INTO `mind_comment` VALUES ('34', '2019-03-18 12:45:39', '防守打法', '7', '1', 'admin');
INSERT INTO `mind_comment` VALUES ('35', '2019-03-18 12:46:46', '电饭锅', '7', '1', 'admin');
INSERT INTO `mind_comment` VALUES ('36', '2019-03-18 12:48:38', '电饭锅', '7', '1', 'admin');
INSERT INTO `mind_comment` VALUES ('37', '2019-03-18 12:49:04', '去问问', '7', '1', 'admin');
INSERT INTO `mind_comment` VALUES ('38', '2019-03-18 12:49:31', '去问问2', '7', '1', 'admin');
INSERT INTO `mind_comment` VALUES ('39', '2019-03-18 12:50:06', '呜呜1', '1', '1', 'admin');
INSERT INTO `mind_comment` VALUES ('40', '2019-03-18 12:50:17', '呜呜2', '1', '1', 'admin');
INSERT INTO `mind_comment` VALUES ('41', '2019-03-18 12:51:37', '请问', '3', '1', 'admin');
INSERT INTO `mind_comment` VALUES ('42', '2019-03-18 12:51:43', '请问', '1', '1', 'admin');
INSERT INTO `mind_comment` VALUES ('43', '2019-03-18 16:18:00', 'qwerer', '11', '1', 'admin');
INSERT INTO `mind_comment` VALUES ('44', '2019-03-18 16:43:55', 'asdfsd', '11', '1', 'admin');
INSERT INTO `mind_comment` VALUES ('45', '2019-03-18 16:44:04', 'good!', '11', '1', 'admin');
INSERT INTO `mind_comment` VALUES ('47', '2019-03-18 16:45:30', 'sdafd', '10', '1', 'admin');
INSERT INTO `mind_comment` VALUES ('48', '2019-03-18 16:45:30', 'sdafd', '10', '1', 'admin');
INSERT INTO `mind_comment` VALUES ('49', '2019-03-18 16:45:52', 'sdafd', '9', '1', 'admin');

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
