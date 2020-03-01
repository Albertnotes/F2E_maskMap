const upDataSidebar = importData => {
  let str = '';
  importData.forEach(element => {
    const adultStockNoMore = (() => {
      if (element.properties.mask_adult === 0) {
        return 'h-bg-info';
      } else {
        return 'h-bg-primary';
      }
    })();
    const childStockNoMore = (() => {
      if (element.properties.mask_child === 0) {
        return 'h-bg-info';
      } else {
        return 'h-bg-secondary';
      }
    })();
    str += `
		<div class="p-card">
			<div class="h-d-flex h-mb-3 h-align-items-center">
				<h2 class="h-flex-1">${element.properties.name}</h2>
				<a class="h1 h-text-primary fas fa-eye h-mr-3" id="path" href="#"
				data-lat = "${element.geometry.coordinates[1]}"
				data-lng = "${element.geometry.coordinates[0]}"
				></a>
				<a class="fas fa-location-arrow" href="https://www.google.com.tw/maps/dir//${element.properties.address}" target="_blank"></a>
			</div>
			<span class="h4 h-text-dark">${element.properties.address}</span>
			<br>
			<span class="h4 h-text-dark">${element.properties.phone}</span>
			<br>
			<span class="h4 h-text-dark">${element.properties.note}</span>
			<br>
			<div class="h-d-flex h-mt-2">
				<div class="p-badges ${adultStockNoMore}"><span class="h5 h-flex-1">成人口罩</span><span>${element.properties.mask_adult}</span></div>
				<div class="p-badges ${childStockNoMore}"><span class="h5 h-flex-1">兒童口罩</span><span>${element.properties.mask_child}</span></div>
			</div>
		</div>
		`;
  });
  sideData.innerHTML = str;
};
