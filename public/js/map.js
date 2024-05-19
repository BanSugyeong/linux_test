// map.js
import { showModalAndInfo } from './modal.js';

export function initializeMap() {
    const mapContainer = document.getElementById('map');
    const mapOption = {
        center: new kakao.maps.LatLng(37.57346, 126.9790),
        level: 8,
        mapTypeId: kakao.maps.MapTypeId.ROADMAP
    };

    const map = new kakao.maps.Map(mapContainer, mapOption);
    const markers = setupMarkers(map);
    const clusterer = new kakao.maps.MarkerClusterer({
        map: map,
        averageCenter: true,
        minLevel: 10
    });
    clusterer.addMarkers(markers);
}

document.addEventListener('DOMContentLoaded', initializeMap);

function setupMarkers(map) {
    const data = [
        [37.51757, 127.0474, '<div style="padding: 5px">강남구</div>'],
        [37.53020, 127.1237, '<div style="padding: 5px">강동구</div>'],
        [37.63990, 127.0255, '<div style="padding: 5px">강북구</div>'],
        [37.55115, 126.8484, '<div style="padding: 5px">강서구</div>'],
        [37.47819, 126.9515, '<div style="padding: 5px">관악구</div>'],
        [37.53855, 127.0822, '<div style="padding: 5px">광진구</div>'],
        [37.49562, 126.8878, '<div style="padding: 5px">구로구</div>'],
        [37.46211, 126.9003, '<div style="padding: 5px">금천구</div>'],
        [37.65425, 127.0566, '<div style="padding: 5px">노원구</div>'],
        [37.66891, 127.0470, '<div style="padding: 5px">도봉구</div>'],
        [37.57433, 127.0398, '<div style="padding: 5px">동대문구</div>'],
        [37.51256, 126.9401, '<div style="padding: 5px">동작구</div>'],
        [37.56622, 126.9015, '<div style="padding: 5px">마포구</div>'],
        [37.57941, 126.9365, '<div style="padding: 5px">서대문구</div>'],
        [37.48368, 127.0327, '<div style="padding: 5px">서초구</div>'],
        [37.56355, 127.0369, '<div style="padding: 5px">성동구</div>'],
        [37.58937, 127.0167, '<div style="padding: 5px">성북구</div>'],
        [37.51451, 127.1059, '<div style="padding: 5px">송파구</div>'],
        [37.51699, 126.8666, '<div style="padding: 5px">양천구</div>'],
        [37.52631, 126.8963, '<div style="padding: 5px">영등포구</div>'],
        [37.53239, 126.9907, '<div style="padding: 5px">용산구</div>'],
        [37.60275, 126.9293, '<div style="padding: 5px">은평구</div>'],
        [37.57346, 126.9790, '<div style="padding: 5px">종로구</div>'],
        [37.56387, 126.9976, '<div style="padding: 5px">중구</div>'],
        [37.60632, 127.0932, '<div style="padding: 5px">중랑구</div>']
    ];
    const markers = data.map((location) => createMarker(location, map));
    return markers;
}

function createMarker(data, map) {
    const marker = new kakao.maps.Marker({
        position: new kakao.maps.LatLng(data[0], data[1]),
        map: map
    });

    const infowindow = new kakao.maps.InfoWindow({
        content: data[2]
    });

    marker.addListener('mouseover', () => infowindow.open(map, marker));
    marker.addListener('mouseout', () => infowindow.close());
    marker.addListener('click', () => showModalAndInfo(data[3]));

    return marker;
}
