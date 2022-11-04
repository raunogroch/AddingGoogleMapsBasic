document.addEventListener("DOMContentLoaded", () => {
  loadMap();
});

const initialMap = {
  title: "Sede Sucre",
  lat: -19.027642,
  lng: -65.259643,
  zoom: 15,
};

const loadMap = () => {
  const { title, lat, lng, zoom } = initialMap;

  const map = new google.maps.Map(document.getElementById("map"), {
    zoom,
    center: { lat, lng },
    disableDefaultUI: true,
  });

  const image = {
    url: "./assets/icons/pin.png",
    size: new google.maps.Size(26, 32),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 32),
  };

  const marker = new google.maps.Marker({
    position: initialMap,
    map: map,
    title,
    icon: image,
  });

  const message =
    '<div class="message"><h2>Univalle Sucre</h2><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Universidad_Privada_del_Valle.jpg/640px-Universidad_Privada_del_Valle.jpg" alt="univalle imagen" /><p>La sede queda en alto las delicias y posee instalaciones amplias con varias carreras demandadas</p></div>';

  const infoWindow = new google.maps.InfoWindow({
    content: message,
    ariaLabel: "Sede Sucre",
  });

  marker.addListener("click", () => {
    infoWindow.open({
      anchor: marker,
      map,
    });
  });
};

const zoomIn = document.getElementById("zoomIn");
const zoomOut = document.getElementById("zoomOut");
const zoomReset = document.getElementById("zoomReset");

zoomIn.addEventListener("click", () => {
  const { zoom } = initialMap;
  initialMap.zoom = zoom + 1;
  loadMap();
});

zoomOut.addEventListener("click", () => {
  let { zoom } = initialMap;
  initialMap.zoom = zoom - 1;
  loadMap();
});

zoomReset.addEventListener("click", () => {
  initialMap.zoom = 15;
  loadMap();
});
