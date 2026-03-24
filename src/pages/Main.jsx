// import React from // , { useEffect, useState }
// "react";
// import ph2 from "../assets/ph2.jpeg";
// import ph3 from "../assets/ph3.jpeg";
// import ph4 from "../assets/ph4.jpeg";
// import ph8 from "../assets/ph8.jpeg";
// import ph9 from "../assets/ph9.jpeg";
// import ph11 from "../assets/ph11.jpeg";
// import ph12 from "../assets/ph12.jpeg";
// import ph13 from "../assets/ph13.jpeg";
// import ph14 from "../assets/ph14.jpeg";
// import ph15 from "../assets/ph15.jpeg";
// import ph16 from "../assets/ph16.jpeg";
// import ph17 from "../assets/ph17.jpeg";
// import ph18 from "../assets/ph18.jpeg";
// import ph19 from "../assets/ph19.jpeg";
// import ph20 from "../assets/ph20.jpeg";
// import ph21 from "../assets/ph21.jpeg";
// import ph22 from "../assets/ph22.jpeg";
// import ph23 from "../assets/ph23.jpeg";
// import ph24 from "../assets/ph24.jpeg";
// import ph25 from "../assets/ph25.jpeg";
// import ph26 from "../assets/ph26.jpeg";
// import ph27 from "../assets/ph27.jpeg";
// import ph28 from "../assets/ph28.jpeg";
// import ph29 from "../assets/ph29.jpeg";
// import ph30 from "../assets/ph30.jpeg";
// import back from "../assets/background.png";
// import foot from "../assets/foot.jpg";

// const Main = () => {
//   //   const [location, setLocation] = useState(null);
//   //   const [error, setError] = useState(null);

//   //   const getLocation = () => {
//   //     if (!navigator.geolocation) {
//   //       setError("Geolocation is not supported by this browser.");
//   //       return;
//   //     }

//   //     navigator.geolocation.getCurrentPosition(
//   //       (position) => {
//   //         setLocation({
//   //           lat: position.coords.latitude,
//   //           lng: position.coords.longitude,
//   //         });
//   //       },
//   //       (err) => {
//   //         setError(err.message);
//   //       }
//   //     );
//   //   };
//   //   useEffect(() => {
//   //     getLocation();
//   //   },[])
//   const sandwiches = [
//     // { name: "كوب زجاجي حراري مع سخان", img: ph1, price: "60000 S.P" },
//     { name: "قوس فرو", img: ph2, price: "15000 S.P" },
//     { name: "بوند فرو", img: ph3, price: "15000 S.P" },
//     { name: "طقم بوند فرو", img: ph4, price: "25000 S.P" },
//     // { name: "كرة ثلج صغيرة", img: ph5, price: "60000 S.P" },
//     // { name: "كرة ثلج كبيرة", img: ph6, price: "90000 S.P" },
//     // { name: "قوس شعر فرو", img: ph7, price: "15000 S.P" },
//     { name: "كرة كريستال مضيئة", img: ph8, price: "45000 - 30000 S.P" },
//     { name: "كرة ثلج كبيرة", img: ph9, price: "90000 S.P" },
//     // { name: "قوس شعر فرو", img: ph10, price: "15000 S.P" },
//     { name: "كرة ثلج صغيرة", img: ph14, price: "60000 S.P" },
//     {
//       name: "برواز صورة ثري دي مضيئ ٣ الوان ليزر",
//       img: ph11,
//       price: "60000 S.P",
//     },
//     { name: "طقم فناجين", img: ph12, price: "50000 S.P" },
//     { name: "ابريق زجاج حراري", img: ph13, price: "70000 S.P" },
//     { name: "طقم طناجر غرانيت", img: ph15, price: "725000 S.P" },
//     { name: "كوب زجاج حراري مع سخان", img: ph16, price: "60000 S.P" },
//     { name: "طقم فناجين شاي و كراوية مع صحن", img: ph17, price: "150000 S.P" },
//     { name: "سيري صحون ٣ مقاسات ٣٦ قطعة", img: ph18, price: "210000 S.P" },
//     { name: "طقم فناجين قهوة ثقيل", img: ph19, price: "180000 S.P" },
//     { name: "طقم فناجين قهوة ثقيل", img: ph20, price: "185000 S.P" },
//     { name: "طقم فناجين قهوة ثقيل", img: ph21, price: "200000 S.P" },
//     { name: "حافظة حرارة مع ٣ أكواب", img: ph22, price: "38000 S.P" },
//     {
//       name: "كلوب شحن تايب سي ٣ الوان ليزر القطعة الواحدة",
//       img: ph23,
//       price: "60000 S.P",
//     },
//     {
//       name: "كلوب شحن تايب سي ٣ الوان ليزر القطعة الواحدة",
//       img: ph24,
//       price: "60000 S.P",
//     },
//     { name: "حافظة حرارة فاكيوم سعة ١ لتر", img: ph25, price: "75000 S.P" },
//     { name: "كرة مضيئة مع بفلة بلوتوث", img: ph26, price: "65000 S.P" },
//     {
//       name: "كلوب شحن عنق نحاسي ٣ الوان ليزر القطعة الواحدة",
//       img: ph27,
//       price: "160000 S.P",
//     },
//     { name: "طقم شمعدان ٣ مقاسات", img: ph28, price: "125000 S.P" },
//     { name: "حافظة حرارة ستانلي ثقيلة", img: ph29, price: "120000 S.P" },
//     { name: "ركوة زجاج حراري مقاس كبير ", img: ph30, price: "55000 S.P" },
//   ];
//   return (
//     <div dir="rtl" className="font-sans bg-orange-50 min-h-screen">
//       <header className="bg-red-700 text-white py-4 shadow-md">
//         <div className="container mx-auto flex justify-between items-center px-4">
//           <div className="flex items-center justify-center">
//             <img className="h-20" src={back} alt="فلفلجي" />
//             <h1 className="text-2xl font-bold mr-5">شنغهاي</h1>
//           </div>
//           <nav>
//             <ul className="flex space-x-4 space-x-reverse">
//               <li className="hover:text-orange-200 cursor-pointer">سوق صيني</li>
//             </ul>
//           </nav>
//         </div>
//       </header>

//       {/* <div>
//        {location && (
//         <p>
//           Latitude: {location.lat} <br />
//           Longitude: {location.lng}
//         </p>
//       )}

//       {error && <p style={{ color: "red" }}>{error}</p>}
//       </div> */}

//       <section className="relative h-72 bg-cover bg-center">
//         <img className="absolute h-72 w-full" src={back} alt="" />
//         <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-center text-white">
//           <h2 className="text-2xl md:text-3xl font-bold mb-2">
//             أدوات مطبخ و هدايا
//           </h2>
//           <p className="text-lg">تعرف على قائمة العروض لدينا</p>
//         </div>
//       </section>

//       <section className="container mx-auto py-10 px-4">
//         <h3 className="md:text-3xl text-2xl font-bold text-center text-yellow-500 mb-8">
//           قائمة العروض
//         </h3>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {sandwiches.map((item, idx) => (
//             <div
//               key={idx}
//               className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
//             >
//               <img
//                 src={item.img}
//                 alt={item.name}
//                 className="w-full object-cover"
//               />
//               <div className="p-4 text-center">
//                 <h4 className="text-xl text-orange-400 font-semibold text-gray-800">
//                   {item.name}
//                 </h4>
//               </div>
//               <div className="p-4 text-center">
//                 <h4 className="text-lg text-red-500 font-semibold text-gray-800">
//                   {item.price}
//                 </h4>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="relative h-80 bg-cover bg-center mt-10">
//         <img className="absolute h-80 w-full" src={foot} alt="" />
//         <div className="absolute inset-0 bg-orange-900 bg-opacity-60 flex flex-col justify-center items-center text-center text-white">
//           {/* <img className="h-28" src={logo} alt="فلفلجي" /> */}
//           <p className="text-lg mt-5"> فرع 1 ريف دمشق - عرطوز</p>
//           <p className="text-lg mt-2"> تواصل - 0968767511</p>
//         </div>
//       </section>

//       <footer className="bg-red-700 text-white text-center py-4">
//         <p>© 2025 شنغهاي - جميع الحقوق محفوظة</p>
//       </footer>
//     </div>
//   );
// };

// export default Main;
// import React from "react";
// import back from "../assets/background.png";
// import foot from "../assets/foot.jpg";

// // مثال: استورد صورك كما كنت تعمل
// import ph2 from "../assets/ph2.jpeg";
// import ph3 from "../assets/ph3.jpeg";
// import ph4 from "../assets/ph4.jpeg";
// import ph8 from "../assets/ph8.jpeg";
// import ph9 from "../assets/ph9.jpeg";
// import ph11 from "../assets/ph11.jpeg";

// const Main = () => {
//   const categories = [
//     "أدوات مطبخ",
//     "هدايا",
//     "ميكياجات",
//     "ألعاب أطفال",
//     "إكسسوارات",
//     "إلكترونيات",
//   ];

//   const products = [
//     { name: "قوس فرو", img: ph2, price: "15000 S.P" },
//     { name: "بوند فرو", img: ph3, price: "15000 S.P" },
//     { name: "طقم بوند فرو", img: ph4, price: "25000 S.P" },
//     { name: "كرة مضيئة", img: ph8, price: "30000 - 45000 S.P" },
//     { name: "كرة ثلج كبيرة", img: ph9, price: "90000 S.P" },
//     { name: "برواز 3D مضيئ", img: ph11, price: "60000 S.P" },
//   ];

//   return (
//     <div dir="rtl" className="font-sans bg-neutral-50 min-h-screen">

//       {/* HEADER */}
//       <header className="bg-white shadow fixed top-0 w-full z-50">
//         <div className="container mx-auto flex justify-between items-center py-4 px-4">
//           <div className="flex items-center gap-3">
//             <img src={back} className="h-14 rounded-lg shadow" />
//             <h1 className="text-3xl font-extrabold text-red-600">شنغهاي</h1>
//           </div>

//           <input
//             placeholder="ابحث عن منتج..."
//             className="w-1/3 px-4 py-2 border rounded-xl focus:ring-2 focus:ring-red-500 outline-none"
//           />

//           <div className="flex gap-5 text-red-600 text-2xl">
//             <i className="ri-shopping-cart-line cursor-pointer"></i>
//             <i className="ri-heart-line cursor-pointer"></i>
//             <i className="ri-user-line cursor-pointer"></i>
//           </div>
//         </div>
//       </header>

//       <div className="pt-24"></div>

//       {/* HERO SLIDER */}
//       <section className="relative h-64 w-full overflow-hidden rounded-b-3xl shadow-lg">
//         <img src={back} className="absolute w-full h-full object-cover" />

//         <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-white">
//           <h2 className="text-3xl font-bold">سوق شنغهاي</h2>
//           <p className="mt-2 text-lg">أدوات مطبخ – هدايا – مكياجات – ألعاب</p>
//         </div>
//       </section>

//       {/* CATEGORIES */}
//       <section className="container mx-auto mt-10 px-4">
//         <h3 className="text-2xl font-bold text-red-700 mb-4">الفئات</h3>

//         <div className="grid grid-cols-3 sm:grid-cols-6 gap-4">
//           {categories.map((cat, idx) => (
//             <div
//               key={idx}
//               className="bg-red-50 border border-red-200 py-4 rounded-xl text-center cursor-pointer hover:bg-red-100 transition"
//             >
//               {cat}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* PRODUCTS */}
//       <section className="container mx-auto mt-12 px-4">
//         <h3 className="text-2xl font-bold text-red-700 mb-6 text-center">
//           المنتجات الأكثر طلباً
//         </h3>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {products.map((p, i) => (
//             <div
//               key={i}
//               className="bg-white rounded-2xl shadow hover:shadow-xl transition transform hover:-translate-y-1"
//             >
//               <img
//                 src={p.img}
//                 className="w-full h-60 object-cover rounded-t-2xl"
//               />
//               <div className="p-4 text-center">
//                 <h4 className="text-xl font-bold text-gray-800">{p.name}</h4>
//                 <p className="text-red-600 font-bold mt-2">{p.price}</p>

//                 <button className="mt-4 py-2 w-full bg-red-600 text-white rounded-xl hover:bg-red-700">
//                   شراء
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* BANNER */}
//       <section className="relative h-64 bg-cover bg-center mt-16 rounded-2xl overflow-hidden shadow-lg">
//         <img src={foot} className="absolute w-full h-full object-cover" />
//         <div className="absolute inset-0 bg-red-900/70 text-white flex flex-col justify-center items-center">
//           <h3 className="text-3xl font-bold">خصومات تصل إلى 40%</h3>
//           <p className="text-lg mt-2">على الأدوات المنزلية والهدايا</p>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="bg-red-700 text-white mt-10 py-6 text-center">
//         <p className="text-lg font-bold">فرع 1: ريف دمشق - عرطوز</p>
//         <p className="mt-2">تواصل: 0968767511</p>
//         <p className="mt-4 text-sm">© 2025 شنغهاي - جميع الحقوق محفوظة</p>
//       </footer>

//       {/* WHATSAPP BUTTON */}
//       <a
//         href="https://wa.me/963968767511"
//         className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-xl text-white text-3xl"
//       >
//         <i className="ri-whatsapp-line"></i>
//       </a>
//     </div>
//   );
// };

// export default Main;
// import React from "react";

// import back from "../assets/background.png";
// import ph2 from "../assets/ph2.jpeg";
// import ph3 from "../assets/ph3.jpeg";
// import ph4 from "../assets/ph4.jpeg";
// import ph8 from "../assets/ph8.jpeg";
// import ph9 from "../assets/ph9.jpeg";
// import ph11 from "../assets/ph11.jpeg";

// const Main = () => {
//   const categories = [
//     { name: "مطبخ", icon: "ri-restaurant-line" },
//     { name: "هدايا", icon: "ri-gift-2-line" },
//     { name: "ميكياج", icon: "ri-makeup-line" },
//     { name: "ألعاب", icon: "ri-gamepad-line" },
//     { name: "إكسسوارات", icon: "ri-women-line" },
//     { name: "إلكترونيات", icon: "ri-plug-line" },
//   ];

//   const products = [
//     { name: "قوس فرو", img: ph2, price: "15000 S.P" },
//     { name: "بوند فرو", img: ph3, price: "15000 S.P" },
//     { name: "طقم بوند فرو", img: ph4, price: "25000 S.P" },
//     { name: "كرة مضيئة", img: ph8, price: "30000 - 45000 S.P" },
//     { name: "كرة ثلج كبيرة", img: ph9, price: "90000 S.P" },
//     { name: "برواز 3D مضيئ", img: ph11, price: "60000 S.P" },
//   ];

//   return (
//     <div dir="rtl" className="bg-gray-50 font-sans">

//       {/* HEADER — شفاف فوق الهيرو */}
//       <header className="absolute top-0 w-full z-40">
//         <div className="container mx-auto flex justify-between items-center py-6 px-4">

//           <h1 className="text-3xl font-black text-white drop-shadow">
//             شنغهاي ✦
//           </h1>

//           <nav className="hidden sm:flex gap-6 text-white text-lg font-medium drop-shadow">
//             <span className="cursor-pointer hover:text-yellow-300">الرئيسية</span>
//             <span className="cursor-pointer hover:text-yellow-300">العروض</span>
//             <span className="cursor-pointer hover:text-yellow-300">الأقسام</span>
//           </nav>

//           <i className="ri-shopping-bag-3-line text-white text-3xl drop-shadow cursor-pointer"></i>
//         </div>
//       </header>

//       {/* HERO */}
//       <section className="relative h-[70vh] w-full flex items-center justify-center">
//         <img
//           src={back}
//           className="absolute w-full h-full object-cover"
//         />
//         <div className="absolute inset-0 bg-black/50"></div>

//         <div className="relative z-10 text-center text-white">
//           <h2 className="text-5xl md:text-6xl font-extrabold tracking-wide">
//             سوق شنغهاي الصيني
//           </h2>
//           <p className="text-xl mt-4 opacity-90">
//             أفضل الأدوات والهدايا والمكياجات بأرخص الأسعار
//           </p>

//           <button className="mt-6 bg-red-600 text-white py-3 px-10 rounded-full text-xl font-bold hover:bg-red-700">
//             تسوق الآن
//           </button>
//         </div>
//       </section>

//       {/* CATEGORIES */}
//       <section className="container mx-auto mt-12 px-4">
//         <h3 className="text-3xl font-bold text-gray-800 mb-6">
//           الأقسام
//         </h3>

//         <div className="grid grid-cols-3 sm:grid-cols-6 gap-6">
//           {categories.map((c, i) => (
//             <div
//               key={i}
//               className="flex flex-col items-center bg-white shadow rounded-2xl py-6 hover:bg-red-50 transition cursor-pointer"
//             >
//               <i className={`${c.icon} text-4xl text-red-600 mb-3`}></i>
//               <span className="text-gray-700 font-semibold">{c.name}</span>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* FLASH SALE */}
//       <section className="container mx-auto mt-16 px-4">
//         <div className="bg-gradient-to-r from-red-600 to-yellow-500 text-white p-8 rounded-3xl shadow-lg">
//           <h3 className="text-3xl font-extrabold">⚡ عروض اليوم — 24 ساعة فقط</h3>
//           <p className="mt-2">خصومات تصل لـ 50% على منتجات مختارة</p>
//         </div>
//       </section>

//       {/* PRODUCTS */}
//       <section className="container mx-auto mt-12 px-4">
//         <h3 className="text-3xl font-bold text-gray-800 mb-6">
//           أشهر المنتجات
//         </h3>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {products.map((p, index) => (
//             <div
//               key={index}
//               className="bg-white shadow-lg rounded-3xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1"
//             >
//               <img
//                 src={p.img}
//                 className="w-full h-64 object-cover"
//               />

//               <div className="p-6 text-center">
//                 <h4 className="text-xl font-bold text-gray-800">{p.name}</h4>
//                 <p className="text-red-600 font-bold mt-2">{p.price}</p>

//                 <button className="mt-4 py-2 w-full bg-red-600 text-white rounded-xl hover:bg-red-700">
//                   إضافة للسلة
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* SPLIT BANNER */}
//       <section className="container mx-auto mt-16 px-4">
//         <div className="grid md:grid-cols-2 gap-6">
//           <div className="bg-gradient-to-br from-red-600 to-red-800 p-10 rounded-3xl text-white shadow-lg">
//             <h3 className="text-3xl font-extrabold">منتجات جديدة وصلت</h3>
//             <p className="mt-3 opacity-90">الكميات محدودة جداً</p>
//             <button className="mt-6 bg-white text-red-700 py-2 px-8 rounded-full font-bold">
//               شاهد الآن
//             </button>
//           </div>

//           <div className="bg-gradient-to-br from-yellow-400 to-orange-500 p-10 rounded-3xl text-white shadow-lg">
//             <h3 className="text-3xl font-extrabold">خصومات نهاية الأسبوع</h3>
//             <p className="mt-3 opacity-90">لا تفوّت هذه الفرصة!</p>
//             <button className="mt-6 bg-white text-orange-600 py-2 px-8 rounded-full font-bold">
//               اكتشف العروض
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* FOOTER */}
//       <footer className="bg-gray-900 text-gray-300 text-center py-10 mt-16">
//         <h4 className="text-xl font-bold text-white">شنغهاي — السوق الصيني</h4>
//         <p className="mt-3">ريف دمشق — عرطوز</p>
//         <p className="mt-1">هاتف: 0968767511</p>
//         <p className="mt-5 text-sm">© 2025 جميع الحقوق محفوظة</p>
//       </footer>

//       {/* WHATSAPP BUTTON */}
//       <a
//         href="https://wa.me/963968767511"
//         className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-xl text-white text-3xl"
//       >
//         <i className="ri-whatsapp-line"></i>
//       </a>
//     </div>
//   );
// };

// export default Main;
import React from "react";

import back from "../assets/background.png";
import ph2 from "../assets/ph2.jpeg";
import ph3 from "../assets/ph3.jpeg";
import ph4 from "../assets/ph4.jpeg";
import ph8 from "../assets/ph8.jpeg";
import ph9 from "../assets/ph9.jpeg";
import ph11 from "../assets/ph11.jpeg";
import ph12 from "../assets/ph12.jpeg";
import ph13 from "../assets/ph13.jpeg";
import ph14 from "../assets/ph14.jpeg";
import ph15 from "../assets/ph15.jpeg";
import ph16 from "../assets/ph16.jpeg";
import ph17 from "../assets/ph17.jpeg";
import ph18 from "../assets/ph18.jpeg";
import ph19 from "../assets/ph19.jpeg";
import ph20 from "../assets/ph20.jpeg";
import ph21 from "../assets/ph21.jpeg";
import ph22 from "../assets/ph22.jpeg";
import ph23 from "../assets/ph23.jpeg";
import ph24 from "../assets/ph24.jpeg";
import ph25 from "../assets/ph25.jpeg";
import ph26 from "../assets/ph26.jpeg";
import ph27 from "../assets/ph27.jpeg";
import ph28 from "../assets/ph28.jpeg";
import ph29 from "../assets/ph29.jpeg";
import ph30 from "../assets/ph30.jpeg";

const Main = () => {
  const categories = [
    { name: "مطبخ", icon: "ri-restaurant-line" },
    { name: "هدايا", icon: "ri-gift-2-line" },
    { name: "ميكياج", icon: "ri-makeup-line" },
    { name: "ألعاب", icon: "ri-gamepad-line" },
    { name: "إكسسوارات", icon: "ri-women-line" },
    { name: "إلكترونيات", icon: "ri-plug-line" },
  ];
  const products = [
    // { name: "كوب زجاجي حراري مع سخان", img: ph1, price: "60000 S.P" },
    { name: "قوس فرو", img: ph2, price: "15000 S.P" },
    { name: "بوند فرو", img: ph3, price: "15000 S.P" },
    { name: "طقم بوند فرو", img: ph4, price: "25000 S.P" },
    // { name: "كرة ثلج صغيرة", img: ph5, price: "60000 S.P" },
    // { name: "كرة ثلج كبيرة", img: ph6, price: "90000 S.P" },
    // { name: "قوس شعر فرو", img: ph7, price: "15000 S.P" },
    { name: "كرة كريستال مضيئة", img: ph8, price: "45000 - 30000 S.P" },
    { name: "كرة ثلج كبيرة", img: ph9, price: "90000 S.P" },
    // { name: "قوس شعر فرو", img: ph10, price: "15000 S.P" },
    { name: "كرة ثلج صغيرة", img: ph14, price: "60000 S.P" },
    {
      name: "برواز صورة ثري دي مضيئ ٣ الوان ليزر",
      img: ph11,
      price: "60000 S.P",
    },
    { name: "طقم فناجين", img: ph12, price: "50000 S.P" },
    { name: "ابريق زجاج حراري", img: ph13, price: "70000 S.P" },
    { name: "طقم طناجر غرانيت", img: ph15, price: "725000 S.P" },
    { name: "كوب زجاج حراري مع سخان", img: ph16, price: "60000 S.P" },
    { name: "طقم فناجين شاي و كراوية مع صحن", img: ph17, price: "150000 S.P" },
    { name: "سيري صحون ٣ مقاسات ٣٦ قطعة", img: ph18, price: "210000 S.P" },
    { name: "طقم فناجين قهوة ثقيل", img: ph19, price: "180000 S.P" },
    { name: "طقم فناجين قهوة ثقيل", img: ph20, price: "185000 S.P" },
    { name: "طقم فناجين قهوة ثقيل", img: ph21, price: "200000 S.P" },
    { name: "حافظة حرارة مع ٣ أكواب", img: ph22, price: "38000 S.P" },
    {
      name: "كلوب شحن تايب سي ٣ الوان ليزر القطعة الواحدة",
      img: ph23,
      price: "60000 S.P",
    },
    {
      name: "كلوب شحن تايب سي ٣ الوان ليزر القطعة الواحدة",
      img: ph24,
      price: "60000 S.P",
    },
    { name: "حافظة حرارة فاكيوم سعة ١ لتر", img: ph25, price: "75000 S.P" },
    { name: "كرة مضيئة مع بفلة بلوتوث", img: ph26, price: "65000 S.P" },
    {
      name: "كلوب شحن عنق نحاسي ٣ الوان ليزر القطعة الواحدة",
      img: ph27,
      price: "160000 S.P",
    },
    { name: "طقم شمعدان ٣ مقاسات", img: ph28, price: "125000 S.P" },
    { name: "حافظة حرارة ستانلي ثقيلة", img: ph29, price: "120000 S.P" },
    { name: "ركوة زجاج حراري مقاس كبير ", img: ph30, price: "55000 S.P" },
  ];
  return (
    <div dir="rtl" className="bg-[#0c0c0c] text-gray-200 font-sans">
      <header className="absolute top-0 w-full z-40 bg-transparent">
        <div className="container mx-auto flex justify-between items-center py-6 px-4">
          <h1 className="text-3xl font-black text-red-500 drop-shadow">
            شنغهاي ✦
          </h1>
          <nav className="hidden sm:flex gap-6 text-gray-200 text-lg font-medium drop-shadow">
            <span className="cursor-pointer hover:text-red-400">الرئيسية</span>
            <span className="cursor-pointer hover:text-red-400">العروض</span>
            <span className="cursor-pointer hover:text-red-400">الأقسام</span>
          </nav>
          <i className="ri-shopping-bag-3-line text-gray-100 text-3xl cursor-pointer"></i>
        </div>
      </header>
      <section className="relative h-[70vh] w-full flex items-center justify-center">
        <img
          src={back}
          className="absolute w-full h-full object-cover opacity-40"
          alt=""
        />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center text-white">
          <h2 className="text-5xl md:text-6xl font-extrabold tracking-wide text-red-500">
            سوق شنغهاي الصيني
          </h2>
          <p className="text-xl mt-4 opacity-90">
            أفضل الأدوات والهدايا والمكياجات بأرخص الأسعار
          </p>
          <button className="mt-6 bg-red-600 text-white py-3 px-10 rounded-full text-xl font-bold hover:bg-red-700 transition">
            تسوق الآن
          </button>
        </div>
      </section>
      <section className="container mx-auto mt-12 px-4">
        <h3 className="text-3xl font-bold text-red-400 mb-6">
          الأقسام
        </h3>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-6">
          {categories.map((c, i) => (
            <div
              key={i}
              className="flex flex-col items-center bg-[#1b1b1b] shadow-lg rounded-2xl py-6 hover:bg-[#2a2a2a] transition cursor-pointer border border-gray-700"
            >
              <i className={`${c.icon} text-4xl text-red-500 mb-3`}></i>
              <span className="text-gray-200 font-semibold">{c.name}</span>
            </div>
          ))}
        </div>
      </section>
      <section className="container mx-auto mt-16 px-4">
        <div className="bg-gradient-to-r from-red-700 to-yellow-600 text-white p-8 rounded-3xl shadow-xl">
          <h3 className="text-3xl font-extrabold">⚡ عروض اليوم — 24 ساعة فقط</h3>
          <p className="mt-2 opacity-95">خصومات تصل لـ 50% على منتجات مختارة</p>
        </div>
      </section>
      <section className="container mx-auto mt-12 px-4">
        <h3 className="text-3xl font-bold text-red-400 mb-6">
          أشهر المنتجات
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.map((p, index) => (
            <div
              key={index}
              className="bg-[#1b1b1b] shadow-xl rounded-3xl overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-1 border border-gray-700"
            >
              <img
                src={p.img}
                className="w-full object-cover"
                alt=""
              />
              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-gray-100">{p.name}</h4>
                <p className="text-red-500 font-bold mt-2">{p.price}</p>
                <button className="mt-4 py-2 w-full bg-red-600 text-white rounded-xl hover:bg-red-700">
                  إضافة للسلة
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="container mx-auto mt-16 px-4">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-gradient-to-br from-red-700 to-red-900 p-10 rounded-3xl text-white shadow-xl">
            <h3 className="text-3xl font-extrabold">بضائع جديدة وصلت</h3>
            <p className="mt-3 opacity-90">الكميات محدودة جداً</p>
            <button className="mt-6 bg-white text-red-700 py-2 px-8 rounded-full font-bold">
              شاهد الآن
            </button>
          </div>
          <div className="bg-gradient-to-br from-yellow-500 to-orange-700 p-10 rounded-3xl text-white shadow-xl">
            <h3 className="text-3xl font-extrabold">حسومات نهاية الأسبوع</h3>
            <p className="mt-3 opacity-90">لا تفوّت هذه الفرصة!</p>
            <button className="mt-6 bg-white text-orange-700 py-2 px-8 rounded-full font-bold">
              اكتشف العروض
            </button>
          </div>
        </div>
      </section>
      <footer className="bg-[#111] text-gray-400 text-center py-10 mt-16 border-t border-gray-800">
        <h4 className="text-xl font-bold text-red-500">شنغهاي — السوق الصيني</h4>
        <p className="mt-3">ريف دمشق — عرطوز</p>
        <p className="mt-1">هاتف: 0968767511</p>
        <p className="mt-5 text-sm">© 2025 جميع الحقوق محفوظة</p>
      </footer>
      <a
        href="https://wa.me/963968767511"
        className="fixed bottom-6 right-6 bg-green-600 p-4 rounded-full shadow-xl text-white text-3xl hover:bg-green-700"
      >
        <i className="ri-whatsapp-line"></i>
      </a>
    </div>
  );
};

export default Main;
