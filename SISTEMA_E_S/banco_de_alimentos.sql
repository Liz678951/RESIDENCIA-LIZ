-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-01-2021 a las 05:48:32
-- Versión del servidor: 10.4.14-MariaDB
-- Versión de PHP: 7.4.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `banco_de_alimentos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_accion`
--

CREATE TABLE `tbl_accion` (
  `Id_Accion` int(11) NOT NULL,
  `Tipo_Accion` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tbl_accion`
--

INSERT INTO `tbl_accion` (`Id_Accion`, `Tipo_Accion`) VALUES
(1, 'ENTRADA'),
(2, 'SALIDA');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_camiones`
--

CREATE TABLE `tbl_camiones` (
  `id_camion` int(11) NOT NULL,
  `Matricula` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tbl_camiones`
--

INSERT INTO `tbl_camiones` (`id_camion`, `Matricula`) VALUES
(1, 'LVR-59-77'),
(2, 'MUJ-21-34'),
(3, 'MXL-92-19');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_choferes`
--

CREATE TABLE `tbl_choferes` (
  `Id_chofer` int(11) NOT NULL,
  `Nombre` varchar(40) NOT NULL,
  `Apellido_Paterno` varchar(30) NOT NULL,
  `Apellido_Materno` varchar(30) NOT NULL,
  `CURP` varchar(20) NOT NULL,
  `Sexo` varchar(2) NOT NULL,
  `Fotografia` varchar(100) NOT NULL,
  `Licencia` varchar(20) NOT NULL,
  `Estado_civil` varchar(10) NOT NULL,
  `Fecha_Nac` varchar(11) NOT NULL,
  `Telefono` varchar(10) NOT NULL,
  `Estudios` varchar(20) NOT NULL,
  `Ocupacion` varchar(20) NOT NULL,
  `Calle` varchar(50) NOT NULL,
  `Colonia` varchar(50) NOT NULL,
  `Num_int` varchar(10) NOT NULL,
  `Num_ext` varchar(10) NOT NULL,
  `Localidad` varchar(60) NOT NULL,
  `Municipio` varchar(60) NOT NULL,
  `CP` varchar(10) NOT NULL,
  `Referencia` varchar(100) NOT NULL,
  `Vehiculo` varchar(10) NOT NULL,
  `Correo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tbl_choferes`
--

INSERT INTO `tbl_choferes` (`Id_chofer`, `Nombre`, `Apellido_Paterno`, `Apellido_Materno`, `CURP`, `Sexo`, `Fotografia`, `Licencia`, `Estado_civil`, `Fecha_Nac`, `Telefono`, `Estudios`, `Ocupacion`, `Calle`, `Colonia`, `Num_int`, `Num_ext`, `Localidad`, `Municipio`, `CP`, `Referencia`, `Vehiculo`, `Correo`) VALUES
(7, 'GABRIELA', 'LEON', 'ESQUIVEL', 'LEESGAXXXXXXXXXXXXX', 'F', '../Choferes/user.png', 'LEESGAXXXX', 'SOLTERO(A)', '2000-12-31', '4323453234', 'BACHILLERATO', 'Ama de Casa', 'LAS ESPERANZA', 'LOMA', '23', '22', 'Barrio San Mateo', 'TOLUCA', '345678', 'A 200 METROS DE LA ESTACIÓN DE AUTOBUSES FRENTE A LA PRIMARIA JOSE PORTILLO', 'MUJ-21-34', 'GABYLEON12@GMAIL.CO'),
(11, 'OMAR', 'GARO', 'GARO', 'XXXXXXXXXXXXXXXXXXX', 'M', '../Choferes/face25.jpg', 'XXXXXXXXXX', 'CASADO(A)', '2000-12-31', '2345676543', 'Secundaria', 'DFSDFDSDF', 'PALMERAS', 'PALMERAS', '22', '222', 'Barrio de la Cruz', 'Toluca', '567890', 'GHGFDSDFGHGFGHJJJJJJJJJJJRD', 'MUJ-21-34', 'jhgfghjh@umb.com'),
(22, 'JORGE', 'DOMINGUEZ', 'TELLEZ', 'XXXXXXXXXXXXXXXXXXX', 'M', '../Choferes/face27.jpg', 'XXXXXXXXXX', 'VIUDO(A)', '2000-12-31', '1234567654', 'Bachillerato', 'REPARTIDOR DE PIZZA', 'ATOTONILCO', 'LAS PALMERAS', '45', '454', 'Barrio Santa María', 'Toluca', '676545', 'FRENTE A LA PRIMARIA', 'MUJ-21-34', 'HAHAHAHA@UMB.COM'),
(23, 'MOISES', 'GALINO', 'CRUZ', 'XXXXXXXXXXXXXXXXXXX', 'M', '../Choferes/face5.jpg', 'XXXXXXXXXX', 'VIUDO(A)', '2000-12-31', '3456765432', 'Bachillerato', 'REPARTIDOR DE COMIDA', 'SAN ANTONIO', 'BARTOLOMEO', '55', '456', 'Barrio de Santa María', 'Toluca', '767654', 'A 100 METROS DE LA IGLESIA DEL PUEBLO', 'MUJ-21-34', 'LOPLI12@GMAIL.COM');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_empleados`
--

CREATE TABLE `tbl_empleados` (
  `Id_empleado` int(11) NOT NULL,
  `Nombre` varchar(40) CHARACTER SET utf8mb4 NOT NULL,
  `Apellido_Paterno` varchar(30) NOT NULL,
  `Apellido_Materno` varchar(30) NOT NULL,
  `CURP` varchar(20) NOT NULL,
  `Sexo` varchar(1) NOT NULL,
  `Fotografia` varchar(100) NOT NULL,
  `RFC` varchar(20) NOT NULL,
  `Estado_civil` varchar(25) NOT NULL,
  `Fecha_Nac` varchar(12) NOT NULL,
  `Telefono` varchar(12) NOT NULL,
  `Estudios` varchar(40) NOT NULL,
  `Calle` varchar(60) NOT NULL,
  `Colonia` varchar(60) NOT NULL,
  `Num_int` varchar(30) NOT NULL,
  `Num_ext` varchar(30) NOT NULL,
  `Localidad` varchar(100) NOT NULL,
  `Municipio` varchar(30) NOT NULL,
  `Referencia` varchar(150) NOT NULL,
  `CP` varchar(10) NOT NULL,
  `Correo` varchar(60) CHARACTER SET utf8mb4 NOT NULL,
  `Passw` varchar(40) NOT NULL,
  `Privilegios` varchar(1) NOT NULL,
  `Ocupacion` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tbl_empleados`
--

INSERT INTO `tbl_empleados` (`Id_empleado`, `Nombre`, `Apellido_Paterno`, `Apellido_Materno`, `CURP`, `Sexo`, `Fotografia`, `RFC`, `Estado_civil`, `Fecha_Nac`, `Telefono`, `Estudios`, `Calle`, `Colonia`, `Num_int`, `Num_ext`, `Localidad`, `Municipio`, `Referencia`, `CP`, `Correo`, `Passw`, `Privilegios`, `Ocupacion`) VALUES
(1, 'CATALINA', 'ESTRADA', 'GOMEZ', 'XXXXXXXXXXXXXXXXXXX', 'F', '../Empleados/face10.jpg', 'XXXXXXXXXXXXX', 'SOLTERO(A)', '2000-12-31', '7362732736', 'Licenciatura', 'INDUSTRIAL BALLO', 'LAS PALMAS', '45', '56', 'Barrio la Joya', 'Toluca', 'A UN COSTADO DEL BODEGA', '123456', 'cata_gom@gmail.com', '1234567890', 'A', 'Ninguna'),
(9, 'CARLOTA', 'CRUZ', 'CRUZ', 'XXXXXXXXXXXXXXXXXXX', 'F', '             ../Empleados/face6.jpg', 'XXXXXXXXXXXXXXXXXXX', 'DIVORCIADO(A)', '2000-12-31', '8765435678', 'LICENCIATURA', 'LAS PERLAS', 'INDUSTRIAL', '67', '87', 'Barrio la Venta', 'TOLUCA', 'A LADO DE LA IGLESIA', '567876', 'CAR123@GMAIL.COM', '1234567890', 'A', 'OBRERO'),
(10, '    JAVIER    ', 'RAMIREZ', 'HERNANDEZ', 'XXXXXXXXXXXXXXXXXXX', 'M', '     ../Empleados/face9.jpg', 'XXXXXXXXXXXXXXXXXXX', 'VIUDO(A)', '2001-01-01', '6545698765', 'BACHILLERATO', 'LAS PALAMAS', 'LAS GOLONDRINAS', '77', '66', 'Calixtlahuaca', 'TOLUCA', 'FRENTE A LA IGLESIA', '665432', 'Javi13@gmail.com', '1234567890', 'V', 'TAXISTA');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_entradas_salida_choferes`
--

CREATE TABLE `tbl_entradas_salida_choferes` (
  `Id_Accion` int(11) NOT NULL,
  `Chofer` varchar(100) NOT NULL,
  `Fecha_Hora` varchar(20) NOT NULL,
  `Accion` varchar(20) NOT NULL,
  `Matricula` varchar(30) NOT NULL,
  `Notas` varchar(500) NOT NULL,
  `Revision` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tbl_entradas_salida_choferes`
--

INSERT INTO `tbl_entradas_salida_choferes` (`Id_Accion`, `Chofer`, `Fecha_Hora`, `Accion`, `Matricula`, `Notas`, `Revision`) VALUES
(8, 'GABRIELA LEON ESQUIVEL', '2020-12-10T22:32', 'ENTRADA', 'MUJ-21-34', 'ENTREGA DE DESPENSAS A SAN JOSE DEL RINCON', ' Catalina Estrada Gomez'),
(9, 'GABRIELA LEON ESQUIVEL', '2020-12-10T22:32', 'SALIDA', 'MUJ-21-34', 'ENTREGA DE DESPENSAS A SAN JOSE DEL RINCON', ' Catalina Estrada Gomez'),
(10, 'JORGE DOMINGUEZ TELLEZ', '2020-12-27T23:31', 'SALIDA', 'MUJ-21-34', 'DESPENSAS AL DIF 45', 'Catalina Estrada Gomez'),
(14, 'MOISES GALINO CRUZ', '2021-01-05T03:17', 'Salida', 'MXL-92-19', 'SAN JOSE DEL RINCON', ' Catalina Estrada Gomez'),
(19, 'JORGE DOMINGUEZ TELLEZ', '2021-01-05T21:27', 'Entrada', 'MUJ-21-34', 'REGRESO DE TOYOCAN', ' Catalina Estrada Gomez'),
(21, 'GABRIELA LEON ESQUIVEL', '2021-01-05T23:09', 'Salida', 'MUJ-21-34', 'DESPENSAS PARA SN JOSE DEL RINCON', ' Catalina Estrada Gomez'),
(22, 'JORGE DOMINGUEZ TELLEZ', '2021-01-05T23:17', 'Salida', 'LVR-59-77', 'SE IRA DE DEJAR DESPENSAS A SAN ANTONIO', ' Catalina Estrada Gomez'),
(23, 'MOISES GALINO CRUZ', '2021-01-08T02:10', 'SALIDA', 'MXL-92-19', 'SE ENTREGARAN 200 DESPENSAS EN SAN JOSE DEL RINCON ', '     JAVIER     RAMIREZ HERNANDEZ'),
(25, 'MOISES GALINO CRUZ', '2021-01-08T19:56', 'SALIDA', 'MXL-92-19', 'LLEVARA EL CAMIÓN A REVISAR AL TALLER SA', '     JAVIER     RAMIREZ HERNANDEZ'),
(26, 'JORGE DOMINGUEZ TELLEZ', '2021-01-08T21:14', 'ENTRADA', 'MUJ-21-34', 'SE ENTREGARAN 100 DESPENSAS EN SAN JOSE DEL RINCON CON UN VALOR DE 100 PESOS CADA UNA', ' CATALINA ESTRADA GOMEZ');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_entradas_salida_proveedores`
--

CREATE TABLE `tbl_entradas_salida_proveedores` (
  `Id_Accion` int(11) NOT NULL,
  `Proveedor` varchar(100) NOT NULL,
  `Fecha_Hora` varchar(30) NOT NULL,
  `Accion` varchar(30) NOT NULL,
  `Notas` varchar(100) NOT NULL,
  `Revision` varchar(100) NOT NULL,
  `Tipo` varchar(2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tbl_entradas_salida_proveedores`
--

INSERT INTO `tbl_entradas_salida_proveedores` (`Id_Accion`, `Proveedor`, `Fecha_Hora`, `Accion`, `Notas`, `Revision`, `Tipo`) VALUES
(12, 'LAMARQUESA SA DE CV ', '2021-01-02T19:03', 'ENTRADA', 'REPARACION DE EQUIPO DE COMPUTO PARA SISTEMAS', ' Catalina Estrada Gomez', '2'),
(13, 'JOSE  ANDRES FUENTES GARCIA', '2021-01-03T22:26', 'SALIDA', 'SE DEVOLVIO UNAS PINZAS DE INTERNET', ' Catalina Estrada Gomez', '1'),
(15, 'ANTONIO JOSE CRUZ GOMEZ', '2021-01-03T13:23', 'ENTRADA', 'SE PASO A DEJAR VERDURAS AL ALMACEN', ' Catalina Estrada Gomez', '1'),
(18, 'LAMARQUESA SA DE CV ', '2021-01-05T00:29', 'ENTRADA', 'SE DEJARON 20 CAJAS DE PAPEL ', ' Catalina Estrada Gomez', '2'),
(19, 'LAMARQUESA SA DE CV ', '2021-01-05T00:31', 'SALIDA', 'SALIO DE ALMACEN ', ' Catalina Estrada Gomez', '2'),
(20, 'JOSE  ANDRES FUENTES GARCIA', '2021-01-05T00:33', 'ENTRADA', 'SE DEJARON 10 PASTELES ', ' Catalina Estrada Gomez', '1'),
(21, 'JOSE  ANDRES FUENTES GARCIA', '2021-01-05T00:39', 'SALIDA', 'SALIO DE BODEGA', ' Catalina Estrada Gomez', '1'),
(22, 'LA SEVILLANA', '2021-01-05T00:35', 'ENTRADA', 'SE PASARA A DIRECCION GENERAL ', ' Catalina Estrada Gomez', '2'),
(24, 'VERDURAS SA', '2021-01-08T19:32', 'ENTRADA', 'SE DEJARA VERDURA EN EL ALMACEN NO 1', ' CATALINA ESTRADA GOMEZ', '2'),
(25, 'ANTONIO JOSE CRUZ GOMEZ', '2021-01-08T19:55', 'ENTRADA', 'SE DEJARAN 29 PAQUETES DE ARROZ', '     JAVIER     RAMIREZ HERNANDEZ', '1'),
(26, 'ANTONIO JOSE CRUZ GOMEZ', '2021-01-08T21:20', 'ENTRADA', 'NNNNNNNNN', ' CATALINA ESTRADA GOMEZ', '1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_localidades`
--

CREATE TABLE `tbl_localidades` (
  `Id_localidad` int(11) NOT NULL,
  `Municipio` varchar(50) NOT NULL,
  `Localidad` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tbl_localidades`
--

INSERT INTO `tbl_localidades` (`Id_localidad`, `Municipio`, `Localidad`) VALUES
(1, 'Toluca', 'La Constitución Toltepec'),
(2, 'Toluca', 'Jicaltepec Cuexcontitlán'),
(3, 'Toluca', 'San Andrés Cuexcontitlán'),
(4, 'Toluca', 'San Diego de los Padres Cuexcontitlán'),
(5, 'Toluca', 'San Diego Linares'),
(6, 'Toluca', 'San Nicolás Tolentino'),
(7, 'Toluca', 'San Pablo Autopan'),
(8, 'Toluca', 'Sebastián Lerdo de Tejada'),
(9, 'Toluca', 'Tlachaloya Segunda Sección'),
(10, 'Toluca', 'Barrio del Cajón'),
(11, 'Toluca', 'San Carlos Autopan'),
(12, 'Toluca', 'Colonia el Refugio'),
(13, 'Toluca', 'El Cerrillo Piedras Blancas'),
(14, 'Toluca', 'Colonia Guadalupe'),
(15, 'Toluca', 'Barrio de Balbuena'),
(16, 'Toluca', 'Jicaltepec Autopan'),
(17, 'Toluca', 'Ojo de Agua'),
(18, 'Toluca', 'San Carlos'),
(19, 'Toluca', 'Barrio Zimbrones'),
(20, 'Toluca', 'San Isidro Ejido de Calixtlahuaca'),
(21, 'Toluca', 'Ranchería San Isidro'),
(22, 'Toluca', 'Barrio Bordo Nuevo'),
(23, 'Toluca', 'La Loma Cuexcontitlán'),
(24, 'Toluca', 'Xicaltepec'),
(25, 'Toluca', 'Ejido de Xicaltepec Otzacatipan'),
(26, 'Toluca', 'De Jesús 1ra. Sección'),
(27, 'Toluca', 'Colonia San Blas Totoltepec'),
(28, 'Toluca', 'San Diego los Padres Cuexcontitlán Sección 5 B'),
(29, 'Toluca', 'Ejido de Nova (Barrio del Museo)'),
(30, 'Toluca', 'Barrio la Joya'),
(31, 'Toluca', 'San José Buenavista'),
(32, 'Toluca', 'San José la Costa'),
(33, 'Toluca', 'Ejido de Oxtotitlán (Nova)'),
(34, 'Toluca', 'Rancho San Bartolo (Rancho Grande)'),
(35, 'Toluca', 'San Judas Tadeo'),
(36, 'Toluca', 'Barrio Santa Cruz'),
(37, 'Toluca', 'Barrio de Santa María'),
(38, 'Toluca', 'Guadalupe'),
(39, 'Toluca', 'Colonia las Palmas'),
(40, 'Toluca', 'Ejido del Cerro del Murciélago'),
(41, 'Toluca', 'Colonia Acuxtitla'),
(42, 'Toluca', 'Rancho Shuli (El Socavón)'),
(43, 'Toluca', 'Las Jaras San Nicolás'),
(44, 'Toluca', 'Toluca de Lerdo'),
(45, 'Toluca', 'Cacalomacán'),
(46, 'Toluca', 'Calixtlahuaca'),
(47, 'Toluca', 'Capultitlán'),
(48, 'Toluca', 'Arroyo Vista Hermosa'),
(49, 'Toluca', 'El Cerrillo Vista Hermosa'),
(50, 'Toluca', 'Guadalupe Totoltepec'),
(51, 'Toluca', 'Palmillas'),
(52, 'Toluca', 'San Antonio Buenavista'),
(53, 'Toluca', 'San Buenaventura'),
(54, 'Toluca', 'San Cayetano Morelos'),
(55, 'Toluca', 'San Cristóbal Huichochitlán'),
(56, 'Toluca', 'San Felipe Tlalmimilolpan'),
(57, 'Toluca', 'San Francisco Totoltepec'),
(58, 'Toluca', 'San José Guadalupe Otzacatipan'),
(59, 'Toluca', 'San Juan Tilapa'),
(60, 'Toluca', 'San Lorenzo Tepaltitlán'),
(61, 'Toluca', 'Ejido San Marcos Yachihuacaltepec'),
(62, 'Toluca', 'San Marcos Yachihuacaltepec'),
(63, 'Toluca', 'San Martín Toltepec'),
(64, 'Toluca', 'San Mateo Otzacatipan'),
(65, 'Toluca', 'San Mateo Oxtotitlán'),
(66, 'Toluca', 'San Pedro Totoltepec'),
(67, 'Toluca', 'Santa Ana Tlapaltitlán'),
(68, 'Toluca', 'Santa Cruz Atzcapotzaltongo'),
(69, 'Toluca', 'Santa Cruz Otzacatipan'),
(70, 'Toluca', 'Santa María Totoltepec'),
(71, 'Toluca', 'Santiago Miltepec'),
(72, 'Toluca', 'Santiago Tlaxomulco'),
(73, 'Toluca', 'Tecaxic'),
(74, 'Toluca', 'Santiago Tlacotepec'),
(75, 'Toluca', 'Tlachaloya'),
(76, 'Toluca', 'Rancho San Miguel Zacango'),
(77, 'Toluca', 'La Palma Toltepec'),
(78, 'Toluca', 'San Miguel Totoltepec'),
(79, 'Toluca', 'Colonia Aviación Autopan'),
(80, 'Toluca', 'El Dorado'),
(81, 'Toluca', 'Hacienda Santín (Rancho Santín)'),
(82, 'Toluca', 'San Diego de los Padres Otzacatipan'),
(83, 'Toluca', 'Rancho San Pablo (Ejido de Capultitlán)'),
(84, 'Toluca', 'Ejido Santa Cruz Atzcapozaltongo'),
(85, 'Toluca', 'Ejido de Almoloya de Juárez'),
(86, 'Toluca', 'Rancho las Lupitas'),
(87, 'Toluca', 'De Jesús 2da. Sección'),
(88, 'Toluca', 'San Diego los Padres Cuexcontitlán Secc. 5 A'),
(89, 'Toluca', 'Barrio de la Cruz'),
(90, 'Toluca', 'Calzada de los Corredores'),
(91, 'Toluca', 'Colonia de Pacífico'),
(92, 'Toluca', 'Barrio la Venta'),
(93, 'Toluca', 'El Embarcadero (Avenida Río Lerma)'),
(94, 'Toluca', 'Colonia del Durazno'),
(95, 'Toluca', 'La Macaria'),
(96, 'Toluca', 'Colonia Dos Ríos (Paraje el Cornejal)'),
(97, 'Toluca', 'La Planada (El Arenal)'),
(98, 'Toluca', 'Barrio Santa María'),
(99, 'Toluca', 'Rancho San José Terán'),
(100, 'Toluca', 'Ejido de la \"Y\" Sección Siete A Revolución (Secció'),
(101, 'Toluca', 'Rancho la Esperanza'),
(102, 'Toluca', 'Santiago Tlaxomulco (Tumbaburros)'),
(103, 'Toluca', 'Albergue Estación de Microondas'),
(104, 'Toluca', 'Colonia la Cañada'),
(105, 'Toluca', 'Colonia el Mirador (Barrio del Canal)'),
(106, 'Toluca', 'Joya de Cacalomacán (Hacienda San Antonio Cano)'),
(107, 'Toluca', 'Lomas de Vista Hermosa'),
(108, 'Toluca', 'El Mirador'),
(109, 'Toluca', 'Santa Juanita de Santiago Tlacotepec'),
(110, 'Toluca', 'El Socavón (El Arroyo)'),
(111, 'Toluca', 'Fraccionamiento el Rosario (Colonia Guadalupe)'),
(112, 'Toluca', 'Villas Santín'),
(113, 'Toluca', 'Galaxias Toluca'),
(114, 'Toluca', 'Rancho Blanco'),
(115, 'Toluca', 'Rancho San Alberto'),
(116, 'Toluca', 'Rancho el Rosedal'),
(117, 'Toluca', 'Santa Martha'),
(118, 'Toluca', 'San José Barbabosa'),
(119, 'Toluca', 'Pueblo Nuevo'),
(120, 'Toluca', 'San Blas Otzacatipan'),
(121, 'Toluca', 'Fraccionamiento Real de San Pablo'),
(122, 'Toluca', 'Fraccionamiento San Diego'),
(123, 'Toluca', 'Colonia la Joya'),
(124, 'Toluca', 'Colonia Shingade'),
(125, 'Toluca', 'Las Bugambilias [Conjunto Habitacional]'),
(126, 'Toluca', 'Paseos San Martín [Conjunto Urbano]'),
(127, 'Toluca', 'Villa Toscana [Conjunto Urbano]'),
(128, 'Toluca', 'Las Misiones [Conjunto Urbano]'),
(129, 'Toluca', 'Barrio la Soledad'),
(130, 'Toluca', 'El Calvario'),
(131, 'Toluca', 'Crespa Floresta'),
(132, 'Toluca', 'La Magdalena Otzacatipan'),
(133, 'Toluca', 'Sauces'),
(134, 'Toluca', 'Francisco Villa'),
(135, 'Toluca', 'Barrio San Mateo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_proveedores_fisicos`
--

CREATE TABLE `tbl_proveedores_fisicos` (
  `Id_Proveedor` int(11) NOT NULL,
  `Nombre` varchar(40) NOT NULL,
  `Apellido_Paterno` varchar(30) NOT NULL,
  `Apellido_Materno` varchar(30) NOT NULL,
  `CURP` varchar(20) NOT NULL,
  `Sexo` varchar(1) NOT NULL,
  `Fotografia` varchar(100) NOT NULL,
  `RFC` varchar(12) NOT NULL,
  `Estado_civil` varchar(12) NOT NULL,
  `Fecha_Reg` varchar(12) NOT NULL,
  `Telefono` varchar(11) NOT NULL,
  `Estudios` varchar(30) NOT NULL,
  `Calle` varchar(40) NOT NULL,
  `Colonia` varchar(40) NOT NULL,
  `Num_int` varchar(10) NOT NULL,
  `Num_ext` varchar(10) NOT NULL,
  `Localidad` varchar(40) NOT NULL,
  `Municipio` varchar(50) NOT NULL,
  `Referencia` varchar(100) NOT NULL,
  `CP` varchar(10) NOT NULL,
  `Correo` varchar(30) NOT NULL,
  `Servicio` varchar(30) NOT NULL,
  `Tipo` varchar(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tbl_proveedores_fisicos`
--

INSERT INTO `tbl_proveedores_fisicos` (`Id_Proveedor`, `Nombre`, `Apellido_Paterno`, `Apellido_Materno`, `CURP`, `Sexo`, `Fotografia`, `RFC`, `Estado_civil`, `Fecha_Reg`, `Telefono`, `Estudios`, `Calle`, `Colonia`, `Num_int`, `Num_ext`, `Localidad`, `Municipio`, `Referencia`, `CP`, `Correo`, `Servicio`, `Tipo`) VALUES
(2, 'JOSE  ANDRES', 'FUENTES', 'GARCIA', 'XXXXXXXXXXXXXXXXXXX', 'M', '../Proveedores/face18.jpg', 'XXXXXXXXXX', 'SOLTERO(A)', '2020-11-03', '7122234567', 'BACHILLERATO', 'ZAPATA', 'MORELOS', '11', '11', 'Barrio la Venta', 'TOLUCA', 'JUNTO A LA CRUZ ROJA', '111111', 'MECANICO123@UMB.CO', 'MECANICO EN GENERAL', '1'),
(7, 'ANTONIO JOSE', 'CRUZ', 'GOMEZ', 'DFGHJKJHGFDFGHJKJHG', 'M', '../Proveedores/face8.jpg', 'DFGHJKJHGF', 'SOLTERO(A)', '2021-01-01', '3456789876', 'BACHILLERATO', 'LAS PALMAS', 'LAS PALAMERAS', '67', '86', 'Arroyo Vista Hermosa', 'TOLUCA', 'FRENTE A LA ESCUELA', '345678', 'CORREOELEC@GMAIL.COM', 'INTERNETWIFIT', '1');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_proveedores_morales`
--

CREATE TABLE `tbl_proveedores_morales` (
  `Id_Proveedor` int(11) NOT NULL,
  `Nombre` varchar(60) NOT NULL,
  `RFC` varchar(20) NOT NULL,
  `Telefono` varchar(12) NOT NULL,
  `Fecha_Registro` varchar(12) NOT NULL,
  `Calle` varchar(40) NOT NULL,
  `Colonia` varchar(40) NOT NULL,
  `NI` varchar(10) NOT NULL,
  `NE` varchar(10) NOT NULL,
  `CP` varchar(10) NOT NULL,
  `Municipio` varchar(100) NOT NULL,
  `Localidad` varchar(100) NOT NULL,
  `Referencia` varchar(150) NOT NULL,
  `Correo` varchar(40) NOT NULL,
  `Servicio` varchar(50) NOT NULL,
  `Tipo` varchar(1) NOT NULL,
  `Fotografia` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `tbl_proveedores_morales`
--

INSERT INTO `tbl_proveedores_morales` (`Id_Proveedor`, `Nombre`, `RFC`, `Telefono`, `Fecha_Registro`, `Calle`, `Colonia`, `NI`, `NE`, `CP`, `Municipio`, `Localidad`, `Referencia`, `Correo`, `Servicio`, `Tipo`, `Fotografia`) VALUES
(6, 'LAMARQUESA SA DE CV ', 'GFDFGHJKSD', '4567898765', '2000-12-31', 'LAS PALOMAS', 'PALMAS DE SANTA FE', '23', '333', '345434', 'TOLUCA', 'Barrio la Soledad', 'FRENTE A LA ESTACIÓN DE AUTOBUSES', 'MARQUESA123@GMAIL.COM', 'ELECTRICO Y CABLEADO', '2', '   ../Proveedores/fonda-de-santa-clara.jpg'),
(9, 'LA SEVILLANA', 'SEVILLANA3', '5654564564', '2021-01-01', 'SANTA CLARA', 'CHIVAGOS', '67', '555', '567845', 'TOLUCA', 'Barrio de Balbuena', 'A LADO DERECHO DE LA COCA COLA', 'SEVILLANA23@GMAIL.COM', 'PAPELERIA12345', '2', '    ../Proveedores/CFE-1.jpg'),
(10, 'VERDURAS SA', 'VERDE32456', '3456789765', '2021-01-01', 'LAS PALMAS', 'INDUSTRIAL SA', '78', '99', '456789', 'TOLUCA', 'Barrio de Balbuena', 'FRENTE A LA ESCUELA ', 'VERDURAS45@GMAIL.COM', 'VERDURAS Y FRUTAS', '2', ' ../Proveedores/verdura.jpg'),
(13, 'ASERRADERO SAN JOSE', 'ASER345432', '1234567876', '2020-12-30', 'NORIA', 'CHIVAGOS', '12', '12', '123456', 'TOLUCA', 'Barrio Santa Cruz', 'A 100 METROS DE LA INDUSTRIA CHERRY', 'ASER23@GMAIL.COM', 'CAJAS DE MADERA', '2', ' ../Proveedores/post_image004.jpg.jpeg'),
(14, 'LALA SA', 'LALAL23456', '3456787654', '2021-01-04', 'UNIVERSITARIA', 'ROBLES', '22', '34', '222332', 'TOLUCA', 'Barrio la Joya', 'FRENTE A LA UNIVERSIDAD DIGITAL', 'LALASADECV12@GMAIL.COM', 'LACTEOS Y MAS', '2', '../Proveedores/lala.jpg');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tbl_accion`
--
ALTER TABLE `tbl_accion`
  ADD PRIMARY KEY (`Id_Accion`);

--
-- Indices de la tabla `tbl_camiones`
--
ALTER TABLE `tbl_camiones`
  ADD PRIMARY KEY (`id_camion`);

--
-- Indices de la tabla `tbl_choferes`
--
ALTER TABLE `tbl_choferes`
  ADD PRIMARY KEY (`Id_chofer`);

--
-- Indices de la tabla `tbl_empleados`
--
ALTER TABLE `tbl_empleados`
  ADD PRIMARY KEY (`Id_empleado`);

--
-- Indices de la tabla `tbl_entradas_salida_choferes`
--
ALTER TABLE `tbl_entradas_salida_choferes`
  ADD PRIMARY KEY (`Id_Accion`);

--
-- Indices de la tabla `tbl_entradas_salida_proveedores`
--
ALTER TABLE `tbl_entradas_salida_proveedores`
  ADD PRIMARY KEY (`Id_Accion`);

--
-- Indices de la tabla `tbl_localidades`
--
ALTER TABLE `tbl_localidades`
  ADD PRIMARY KEY (`Id_localidad`);

--
-- Indices de la tabla `tbl_proveedores_fisicos`
--
ALTER TABLE `tbl_proveedores_fisicos`
  ADD PRIMARY KEY (`Id_Proveedor`);

--
-- Indices de la tabla `tbl_proveedores_morales`
--
ALTER TABLE `tbl_proveedores_morales`
  ADD PRIMARY KEY (`Id_Proveedor`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tbl_accion`
--
ALTER TABLE `tbl_accion`
  MODIFY `Id_Accion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `tbl_camiones`
--
ALTER TABLE `tbl_camiones`
  MODIFY `id_camion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `tbl_choferes`
--
ALTER TABLE `tbl_choferes`
  MODIFY `Id_chofer` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `tbl_empleados`
--
ALTER TABLE `tbl_empleados`
  MODIFY `Id_empleado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `tbl_entradas_salida_choferes`
--
ALTER TABLE `tbl_entradas_salida_choferes`
  MODIFY `Id_Accion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de la tabla `tbl_entradas_salida_proveedores`
--
ALTER TABLE `tbl_entradas_salida_proveedores`
  MODIFY `Id_Accion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de la tabla `tbl_localidades`
--
ALTER TABLE `tbl_localidades`
  MODIFY `Id_localidad` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=136;

--
-- AUTO_INCREMENT de la tabla `tbl_proveedores_fisicos`
--
ALTER TABLE `tbl_proveedores_fisicos`
  MODIFY `Id_Proveedor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `tbl_proveedores_morales`
--
ALTER TABLE `tbl_proveedores_morales`
  MODIFY `Id_Proveedor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
