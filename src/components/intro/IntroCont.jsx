import React, { useState } from 'react'

const IntroCont = () => {

  const [selectedFood, setSelectedFood] = useState('food1');

  const handleIconClick = (food) => {
    setSelectedFood(food);
  };

  return (
    <section id="introSection" className="intro__wrap Nanum5">
        <h3 className="blind">한국 유명한 셰프</h3>
        <div className="intro__inner2 container">
          <div className="intro__desc2">
              <div>
                  <div className={`icon-bg1 cursor ${selectedFood === 'food1' ? 'active' : ''}`} onClick={() => handleIconClick('food1')}>
                    <p>한식</p>
                  </div>
              </div>
              <div>
                  <div className={`icon-bg2 cursor ${selectedFood === 'food2' ? 'active' : ''}`} onClick={() => handleIconClick('food2')}>
                    <p>일식</p>
                  </div>
              </div>
              <div>
                <div className={`icon-bg3 cursor ${selectedFood === 'food3' ? 'active' : ''}`} onClick={() => handleIconClick('food3')}>
                  <p>중식</p>
                </div>
              </div>
              <div>
                <div className={`icon-bg4 cursor ${selectedFood === 'food4' ? 'active' : ''}`} onClick={() => handleIconClick('food4')}>
                  <p>양식</p>
                </div>
              </div>
          </div>
        </div>
          <div className="intro__main section">
            <div className={`food1 ${selectedFood === 'food1' ? 'active' : ''}`}>
              <div className="intro__img"></div>
              <div className="intro__desc3">
                <h3>한식이란?</h3>
                <ul>
                  <li>다양한 반찬 : 한식 식사는 주로 밥과 국, 그리고 다양한 반찬으로 이루어집니다. 반찬은 고기, 생선, 채소, 나물 등 다양한 재료를 다양한 조리 기법으로 만들어집니다. 한식 식사는 밥 한 그릇과 다양한 반찬을 함께 즐기는 것이 일반적입니다.</li>
                  <li>발효식품의 활용 : 한식에서는 발효식품을 많이 사용합니다. 김치, 된장, 간장, 고추장 등은 발효를 통해 특별한 맛과 향을 얻는 재료로 널리 알려져 있습니다. 발효식품은 한식의 고유한 맛과 영양을 부여하는 중요한 역할을 합니다.</li>
                  <li>다양한 조리 기법 : 한식은 삶기, 찌기, 볶기, 구이, 조림, 무침 등 다양한 조리 기법을 사용합니다. 이러한 다양한 조리 기법을 통해 재료의 맛과 영양을 최대한으로 살릴 수 있으며, 각각의 요리에 독특한 특징과 맛을 부여합니다.</li>
                  <li>균형 있는 식단 : 한식은 곡물, 채소, 고기, 생선, 해조류 등 다양한 식재료를 균형 있게 조합하여 식단을 구성합니다. 이를 통해 다양한 영양소를 섭취하고 건강을 유지할 수 있습니다.</li>
                </ul>
              </div>
            </div>
            <div className={`food2 ${selectedFood === 'food2' ? 'active' : ''}`}>
              <div className="intro__img"></div>
              <div className="intro__desc3">
                <h3>일식이란?</h3>
                <ul>
                  <li>초밥과 사시미 : 일식에서 가장 잘 알려진 요리 중 하나인 초밥은 신선한 회를 신선한 쌀로 싸 먹는 음식입니다. 생선, 해산물, 계란 등 다양한 재료를 사용하여 다양한 맛과 향을 즐길 수 있습니다. 사시미는 신선한 회를 얇게 썰어 서빙하는 형태로, 다양한 생선과 해산물을 다루는 것이 특징입니다.</li>
                  <li>라멘 : 라멘은 중국의 면요리에서 유래한 일식 요리로, 면과 스프, 다양한 토핑으로 구성됩니다. 면은 쫄깃하고 맛있게 끓여지며, 스프는 고기나 해산물을 기반으로 다양한 맛을 가집니다. 라멘은 일본에서 매우 인기 있는 대표적인 일식 요리입니다.</li>
                  <li>텐동과 가츠동 : 텐동은 고기나 해산물, 야채 등을 가벼운 튀김 옷에 입혀 튀긴 요리입니다. 가츠동은 돼지고기 등을 동파육으로 튀긴 후 밥 위에 얹은 요리입니다. 텐동과 가츠동은 고소하고 바삭한 맛으로 많은 사람들에게 사랑받는 일식 요리입니다.</li>
                  <li>와규 : 일본은 와규로 유명한데, 와규는 일본산 소의 고기로서 부드럽고 풍부한 지방이 특징입니다. 와규는 고급 요리 재료로 여겨지며, 그 중에서도 마블링이 많은 고급 와규는 세계적으로 인기를 끌고 있습니다.</li>
                </ul>
              </div>
            </div>
            <div className={`food3 ${selectedFood === 'food3' ? 'active' : ''}`}>
              <div className="intro__img"></div>
              <div className="intro__desc3">
                <h3>중식이란?</h3>
                <ul>
                  <li>다양한 조리 기법 : 중식은 볶기, 튀기기, 삶기, 찌기, 푸기, 탕 조리 등 다양한 조리 기법을 사용합니다. 각각의 요리에 맞는 조리 기법을 선택하여 식재료의 맛과 질감을 최대한으로 살리는 것이 중요합니다.</li>
                  <li>고기와 채소의 조화 : 중식은 고기와 채소를 조화롭게 사용하는 특징이 있습니다. 고기는 돼지고기, 소고기, 닭고기, 해산물 등 다양한 종류로 사용되며, 채소는 다양한 종류의 신선한 야채와 버섯 등이 사용됩니다.</li>
                  <li>향신료의 활용 : 중식은 다양한 향신료를 사용하여 특별한 맛과 향을 내는데 중점을 둡니다. 대표적인 향신료로는 간장, 생강, 마늘, 고추, 복숭아 농축액, 스타 어니스 등이 있으며, 이들을 조합하여 다양한 요리에 특별한 풍미를 부여합니다.</li>
                  <li>지역 특색 : 중식은 중국 내 지역에 따라 다양한 스타일과 특색을 가지고 있습니다. 예를 들어, 광동 요리는 간단하고 경쾌한 맛이 특징이며, 사천 요리는 매운 맛이 강조됩니다. 중식은 지역의 문화와 풍속을 반영하여 그 지역의 특색을 살린 요리 스타일을 제공합니다.</li>
                </ul>
              </div>
            </div>
            <div className={`food4 ${selectedFood === 'food4' ? 'active' : ''}`}>
              <div className="intro__img"></div>
              <div className="intro__desc3">
                <h3>양식이란?</h3>
                <ul>
                  <li>고기와 해산물 : 양식은 고기와 해산물을 중심으로 한 요리가 특징입니다. 스테이크, 로스트, 그릴 요리 등 다양한 고기 요리와 생선, 조개류, 새우 등의 해산물이 주로 사용됩니다. 고기와 해산물은 주로 구워서 조리되거나 소스와 함께 튀겨지는 등 다양한 방식으로 조리됩니다.</li>
                  <li>크림 소스와 소스 기반 요리 : 양식은 크림 소스나 다양한 소스를 사용하는 요리가 많습니다. 베어네즈 소스, 토마토 소스, 화이트 와인 소스 등 다양한 소스가 사용되며, 이를 기반으로 한 요리들은 풍부한 맛과 향을 가지고 있습니다.</li>
                  <li>구워짐과 튀김 : 양식은 구워지는 요리나 튀겨지는 요리가 많습니다. 고기, 생선, 야채 등을 오븐이나 그릴에서 구워서 조리하거나, 팬이나 튀김기로 튀겨서 바삭한 표면을 만들어내는 방식이 일반적입니다.</li>
                  <li>풍성한 디저트 : 양식은 풍성하고 다양한 종류의 디저트로 유명합니다. 파이, 푸딩, 크레페, 마카롱, 초콜릿 등 다양한 디저트가 준비되어 있으며, 과일이나 크림, 초콜릿 등을 사용하여 풍부한 맛과 질감을 즐길 수 있습니다.</li>
                </ul>
              </div>
            </div>
          </div>
    </section>
  )
}


export default IntroCont
