-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 25, 2020 at 11:05 AM
-- Server version: 10.4.6-MariaDB
-- PHP Version: 7.3.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tr_user`
--

-- --------------------------------------------------------

--
-- Table structure for table `class`
--

CREATE TABLE `class` (
  `id_class` int(11) NOT NULL,
  `class_name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `class`
--

INSERT INTO `class` (`id_class`, `class_name`) VALUES
(1, 'CNTT-K15A'),
(2, 'CNTT-K15B'),
(6, 'CNTT-K15C');

-- --------------------------------------------------------

--
-- Table structure for table `diem`
--

CREATE TABLE `diem` (
  `id_diem` int(11) NOT NULL,
  `id` int(11) NOT NULL,
  `idMon` int(11) NOT NULL,
  `chuyencan` double NOT NULL,
  `thi` double NOT NULL,
  `tkhp` double NOT NULL,
  `diemchu` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `monhoc`
--

CREATE TABLE `monhoc` (
  `idMon` int(11) NOT NULL,
  `TenMon` varchar(255) NOT NULL,
  `SoTinChi` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `monhoc`
--

INSERT INTO `monhoc` (`idMon`, `TenMon`, `SoTinChi`) VALUES
(2, 'Lập Trình Java', 3),
(3, 'Lập trình trên thiết bị di động', 3),
(6, 'Công nghệ phần mềm', 2);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `id_class` int(11) NOT NULL,
  `MaSV` varchar(255) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_vietnamese_ci NOT NULL,
  `image` text NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone_number` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `id_class`, `MaSV`, `name`, `image`, `email`, `phone_number`) VALUES
(23, 2, 'DTC165D4802010036', 'Vũ Trí Tùng', 'https://scontent.fhan5-3.fna.fbcdn.net/v/t1.0-9/86969945_878529232598432_2177478578608799744_o.jpg?_nc_cat=111&ccb=2&_nc_sid=09cbfe&_nc_ohc=C2c-ONiMZxcAX9IVqPb&_nc_ht=scontent.fhan5-3.fna&oh=8e49b73643ac11afc8176dd10f3cfb6d&oe=5FB8E2E6', 'tritung1998@gmail.com', '0327748844'),
(47, 2, 'DTC16HD4802010052', 'Đào Xuân Thắng', 'https://scontent.fhan5-3.fna.fbcdn.net/v/t1.0-9/53117871_999366127119378_7113113935561097216_o.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_ohc=MnE2myg1cHoAX_httXv&_nc_oc=AQlIyR5EabI8_B-vUnEEIGmt6G005bBUgNgg-rhWMDVhcc1ObpxnWObdtJznVFnv1i6yyCtIe0Zq0Al0COd-_3mk&_nc_ht=scontent.fhan5-3.fna&oh=fb5b027e0b0697ebe3013e67f018050f&oe=5FBA0251\r\n', 'thang@gmail.com', '0327748899'),
(48, 2, 'DTC165D4802010267', 'Trần Văn Út', 'https://scontent.fhan5-7.fna.fbcdn.net/v/t1.0-9/121013095_1517002218509438_2737413691433136_o.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=vRBmYACEWLUAX9VUQMH&_nc_ht=scontent.fhan5-7.fna&oh=629506fb64bafaa6758d4d7b6329a676&oe=5FB96795', 'ut@gmail.com', '0327748822'),
(82, 1, 'DTC165D4802010040', 'Hoàng Văn Thái', 'https://scontent.fhan5-2.fna.fbcdn.net/v/t1.0-9/43471397_467367690451470_8198284053355429888_n.jpg?_nc_cat=110&ccb=2&_nc_sid=0debeb&_nc_ohc=tsyWeIoWJ9AAX_nA2-b&_nc_ht=scontent.fhan5-2.fna&oh=b56f478b8ad33a0a60735a18242c48a2&oe=5FB8FC98', 'hoangthai@gmail.com', '0324484577'),
(89, 2, 'DTC16HD4802010267', 'Trần Tuấn Hải', 'https://scontent.fhan5-5.fna.fbcdn.net/v/t1.0-9/116473572_310451460261553_3494561716653927757_o.jpg?_nc_cat=108&ccb=2&_nc_sid=e3f864&_nc_ohc=1MtqErpYAK0AX91bEv1&_nc_ht=scontent.fhan5-5.fna&oh=aa29b46b9487d50be277532a91f3784e&oe=5FB7D10D', 'trantuanhai97@gmail.com', '0327789966');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `class`
--
ALTER TABLE `class`
  ADD PRIMARY KEY (`id_class`);

--
-- Indexes for table `diem`
--
ALTER TABLE `diem`
  ADD PRIMARY KEY (`id_diem`);

--
-- Indexes for table `monhoc`
--
ALTER TABLE `monhoc`
  ADD PRIMARY KEY (`idMon`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `class`
--
ALTER TABLE `class`
  MODIFY `id_class` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `diem`
--
ALTER TABLE `diem`
  MODIFY `id_diem` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `monhoc`
--
ALTER TABLE `monhoc`
  MODIFY `idMon` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=96;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
