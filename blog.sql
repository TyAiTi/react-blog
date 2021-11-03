-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Nov 03, 2021 at 04:35 PM
-- Server version: 10.3.31-MariaDB-0+deb10u1
-- PHP Version: 7.3.31-1~deb10u1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blog`
--

-- --------------------------------------------------------

--
-- Table structure for table `status`
--

CREATE TABLE `status` (
  `id_st` int(11) NOT NULL,
  `connecter_id` int(11) NOT NULL,
  `content` varchar(99) NOT NULL,
  `date_st` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `benefit` int(11) DEFAULT NULL,
  `done` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `status`
--

INSERT INTO `status` (`id_st`, `connecter_id`, `content`, `date_st`, `benefit`, `done`) VALUES
(1, 2, 'cần học iot', '2021-10-06 05:21:56', 100000, 0),
(2, 1, 'cần học khóa IOT cơ bản', '2021-10-06 06:12:00', 100000, 0),
(3, 1, 'cần học khóa IOT cơ bản', '2021-10-06 06:12:51', 100000, 0),
(4, 1, 'cần học khóa IOT cơ bản nè', '2021-10-06 06:41:01', 100000, 0),
(5, 1, 'cần học khóa IOT cơ bản nè', '2021-10-06 07:17:56', 100000, 0),
(6, 1, 'Tôi cần học PHP', '2021-10-06 13:53:18', 10000, 0),
(7, 1, 'xin chào', '2021-10-06 15:05:29', 12, 0),
(8, 1, 'xin chào', '2021-10-06 15:06:23', 12, 0),
(9, 1, 'sss', '2021-10-06 16:37:27', 111, 0),
(10, 2, 'Tôi cần học Java', '2021-10-06 16:51:51', 20000, 0),
(11, 2, 'Cho xin khóa MySQL', '2021-10-07 05:55:49', 20000, 0),
(12, 1, 'Tìm cộng sự JAVA', '2021-10-07 06:32:48', 250000, 0),
(13, 1, 'cần học khóa IOT cơ bản', '2021-10-07 09:20:38', 100000, 0),
(14, 1, 'cần học khóa IOT cơ bản', '2021-10-07 09:21:05', 100000, 0),
(15, 1, 'cần học khóa IOT cơ bản', '2021-10-07 09:25:21', 100000, 0),
(16, 1, 'xin chào, mình cần 1-1 socket io', '2021-10-07 09:26:45', 30000, 0),
(17, 1, 'Tôi cần học Java 1-1', '2021-10-07 09:27:29', 25000, 0),
(18, 1, 'Tôi cần học Java 1-2', '2021-10-07 09:29:00', 55000, 0),
(19, 1, 'Tôi cần học Java và C++', '2021-10-07 13:33:21', 150000, 0),
(20, 1, 'cần học khóa IOT cơ bản', '2021-10-10 16:50:02', 100000, 0),
(21, 1, 'Tôi cần học Java', '2021-10-10 16:55:57', 12345, 0),
(22, 2, 'Mình cần học web PHP 1-1', '2021-10-15 13:47:17', 250000, 0),
(24, 2, 'Mình cần làm luận văn mạng xã hội 4.0', '2021-10-20 01:53:04', 300000, 0),
(25, 2, 'Mình cần học con trỏ trong C++', '2021-10-20 01:53:39', 150000, 0),
(26, 1, 'Em đang có một case check valid của dữ liệu đầu vào. Nhờ các bác đóng góp ý kiến viết trường hợp nà', '2021-10-28 08:34:51', 20000, 0),
(27, 1, 'Chào mọi người, cho em hỏi em có thử CRUD và test trong postman. Mỗi lần e thử create và update và ', '2021-10-28 08:35:22', 20000, 0),
(28, 1, 'Ac dùng node js với mysql cho em hỏi chút về Join trong Mysql được ko ạ. Em muốn lấy bài viết và có', '2021-10-28 08:36:06', 30000, 0),
(29, 57, 'Chào mọi người ạ, em muốn làm chức năng đăng nhập với nodejs moongdb theo mô hình mvc nhưng không b', '2021-10-28 08:36:36', 400000, 0),
(30, 57, 'Cho mình hỏi cách lấy giờ viet nam theo dạng yyyy-mm-dd hh:mm:ss trong nodejs với ạ. Mình search mà', '2021-10-28 08:37:16', 20000, 0),
(31, 57, 'Ac cho em hỏi là e đang làm csdl bán hàng và đang có thắc mắc là quản lí số lượng tồn kho của produ', '2021-10-28 08:37:37', 20000, 0),
(32, 60, 'em chào các bác, các bác cho em hỏi xíu bài tập ạ: em có 1 bảng transactions lưu tháng giao dịch vớ', '2021-10-28 08:38:03', 30000, 0),
(33, 60, 'Chào mn ạ.. mn có link hướng dẫn tạo mongodb và lấy link mongo về source code mình trên ec2 không ạ', '2021-10-28 08:38:17', 35000, 0),
(34, 58, 'Em chào mọi người ạ, em có đoạn code đang hightlight kia ý em là muốn find theo option { uid: value', '2021-10-28 08:49:06', 50000, 0),
(35, 58, 'Mình mới làm nodejs và mình có issues như thế này ở file index.js mình set static cho folder medias', '2021-10-28 08:49:35', 60000, 0),
(36, 58, 'cho em hỏi với mọi người, em mới reset PC nên hơi ngáo, trước em có install cái tsconfig.json ý thì', '2021-10-28 08:51:10', 70000, 0),
(37, 58, 'Em chào mọi người  Em đang làm con bot bằng puppeteer-extra . Em làm tới đoạn checkout em kiểm tra ', '2021-10-28 08:52:24', 40000, 0);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(70) NOT NULL,
  `password` varchar(70) NOT NULL,
  `salt` varchar(11) DEFAULT NULL,
  `email` varchar(50) NOT NULL,
  `phone` varchar(11) DEFAULT NULL,
  `name` varchar(99) NOT NULL,
  `register` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `expired` datetime DEFAULT NULL,
  `role` varchar(1) NOT NULL DEFAULT '0',
  `balance` int(11) NOT NULL DEFAULT 0,
  `cash` int(11) NOT NULL DEFAULT 0,
  `gender` int(1) NOT NULL,
  `avatar` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `username`, `password`, `salt`, `email`, `phone`, `name`, `register`, `expired`, `role`, `balance`, `cash`, `gender`, `avatar`) VALUES
(1, 'ty', '2f8cea12f35065d1d5cbcf169c138126', 'dDsT5Mg3j2', 'tuhoangty@gmail.com', '0788839863', 'Phạm Minh Tỷ', '2021-10-12 18:00:52', NULL, '0', 0, 0, 0, '1avatar.jpg'),
(2, 'anh', '315f3465f46fc293effb9979b73af759', 's5NuTQnCLe', 'AnhB1710104@student.ctu.edu.vn', '0794964817', 'Lan Anh Mới', '2021-10-20 00:55:42', NULL, '0', 0, 0, 0, '2avatar.jpg'),
(30, 'qua', '1e76207f42962072eff134d7685b24cf', 'QKltb2K2Q1', 'qua97@gmail.com', '123456789', 'Loan Anh', '2021-10-19 06:11:12', NULL, '0', 0, 0, 0, '30avatar.jpg'),
(57, 'duongduybach', 'd9b49781cd1a1c5bca1c3512048e789c', 'apjnLM0eBW', 'duongduybach@gmail.com', '0704902080', 'Dương Duy Bách', '2021-10-20 01:59:00', NULL, '0', 0, 0, 1, '57avatar.jpg'),
(58, 'nami', 'e4cdf5553049ddbdb7b840bc37a7c180', 'JsdArxIF8H', 'nami@gmail.com', '0123456789', 'Nami', '2021-10-20 02:05:20', NULL, '0', 0, 0, 2, '58avatar.jpg'),
(59, 'trandangkhoa', '2bd08a01ab7db84db20f33efe2a969bd', 'vMFiI747EC', 'trandangkhoa@gmail.com', '0704902081', 'Khoa Phạm', '2021-10-21 14:17:51', NULL, '0', 0, 0, 1, 'user.png'),
(60, 'thanhdo', '1810a6db9a7c1e4662e3b40938e6d5e8', 'YZrsaXTMCf', 'do@gmail.com', '0704902084', 'Vũ Văn Thành Đô', '2021-10-20 05:07:38', NULL, '0', 0, 0, 1, '60avatar.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `status`
--
ALTER TABLE `status`
  ADD PRIMARY KEY (`id_st`),
  ADD KEY `idx_upost_user` (`connecter_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `salt` (`salt`),
  ADD UNIQUE KEY `phone` (`phone`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `status`
--
ALTER TABLE `status`
  MODIFY `id_st` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `status`
--
ALTER TABLE `status`
  ADD CONSTRAINT `fk_upost_user` FOREIGN KEY (`connecter_id`) REFERENCES `users` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
