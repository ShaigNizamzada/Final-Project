import React from "react";
import { Collapse } from "antd";
const textOne = `
Zahirən zərif dizayn gözlənilməz məzmunla tez şişməyə və ya faktiki fəaliyyətin ağırlığı altında pozulmağa başlaya bilər. Saxta məlumatlar gözəl görünüşlü tərtibatı təmin edə bilər, lakin bu, canlı, nəfəs alan tətbiqin nəyə dözməli olduğunu əks etdirmir. Real data edir.
`;
const textTwo = `Professional istifadə şablon sistemlərində veb saytlar. Kommersiya nəşriyyat platformaları və məzmun idarəetmə sistemləri eyni şablondan istifadə edərək fərqli mətnləri, fərqli məlumatları göstərə bilmənizi təmin edir. Söhbət yüzlərlə məqaləyə, veb mağazalar üçün məhsul səhifələrinə nəzarətdən gedir.
`;
const textThree = `Əgər nüsxə dizaynda diqqəti yayındırarsa, onda siz nəyisə səhv edirsiniz və ya onlar surət dəyişikliklərini müzakirə edirlər. Bu, bir az zəhlətökən ola bilər, lakin siz onlara bu müzakirənin başqa vaxt üçün ən uyğun olacağını deyə bilərsiniz. Ən pis halda müzakirə ən azı saytınızın son məqsədinə doğru işləyir, burada lorem ipsum ilə bağlı suallar cavab vermir.`;
const items = [
  {
    key: "1",
    label:
      "Nə üçün üzvi pambıq parçaları və sertifikatlı fabrikləri seçməlisiniz?",
    children: <p>{textOne}</p>,
  },
  {
    key: "2",
    label: "Məhsulunuz necə qablaşdırılır?",
    children: <p>{textTwo}</p>,
  },
  {
    key: "3",
    label: "Uşaq duşu üçün hədiyyə almaq üçün ən yaxşı ölçü hansıdır?",
    children: <p>{textThree}</p>,
  },
];
const App = () => {
  const onChange = (key) => {
    // console.log(key);
  };
  return <Collapse items={items} onChange={onChange} />;
};
export default App;
