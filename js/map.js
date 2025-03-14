ymaps.ready(function () {
    var myMap = new ymaps.Map('map__container', {
        center: [45.029833,39.015764],
        zoom: 15,
        // Добавим панель маршрутизации.
    });

    var target = new ymaps.Placemark([45.029833,39.015764], null,{
        iconLayout: 'default#image',
        iconImageHref: "/img/map__target.svg",
        iconImageSize: [39, 51],
        iconImageOffset: [-20, -44]
    });

    myMap.geoObjects.add(target);

});
