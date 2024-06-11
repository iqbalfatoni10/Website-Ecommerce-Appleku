$(document).ready(function () {
  $(".search-button").on("click", function () {
    swal({
      title: "",
      text: "Mencari Data...",
      icon: "https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif",
      button: false,
      timer: 1000,
    });
    $.ajax({
      url: "data/iPhone.json",
      success: (iPhone) => {
        const cari = $(".input-keyword").val();
        if (cari == "iPhone X") {
          const spesifikasi = `<div class="card" style="width: 30rem">
                                  <img src="${iPhone.search[0].img}" class="card-img-top" />
                                  <div class="card-body">
                                    <h3 class="card-title">${iPhone.search[0].nama}</h3>
                                  </div>
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><strong>Warna : </strong>${iPhone.search[0].warna}</li>
                                    <li class="list-group-item"><strong>Kapasitas : </strong>${iPhone.search[0].kapasitas}</li>
                                    <li class="list-group-item"><strong>Tinggi : </strong>${iPhone.search[0].tinggi}</li>
                                    <li class="list-group-item"><strong>Lebar : </strong>${iPhone.search[0].lebar}</li>
                                    <li class="list-group-item"><strong>Berat : </strong>${iPhone.search[0].berat}</li>
                                    <li class="list-group-item"><strong>Layar : </strong>${iPhone.search[0].layar}</li>
                                    <li class="list-group-item"><strong>Kamera : </strong>${iPhone.search[0].kamera}</li>
                                  </ul>
                                </div>`;
          $(".spesifikasi").html(spesifikasi);
        } else if (cari == "iPhone XS") {
          const spesifikasi = `<div class="card" style="width: 30rem">
                                  <img src="${iPhone.search[1].img}" class="card-img-top" />
                                  <div class="card-body">
                                    <h3 class="card-title">${iPhone.search[1].nama}</h3>
                                  </div>
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><strong>Warna : </strong>${iPhone.search[1].warna}</li>
                                    <li class="list-group-item"><strong>Kapasitas : </strong>${iPhone.search[1].kapasitas}</li>
                                    <li class="list-group-item"><strong>Tinggi : </strong>${iPhone.search[1].tinggi}</li>
                                    <li class="list-group-item"><strong>Lebar : </strong>${iPhone.search[1].lebar}</li>
                                    <li class="list-group-item"><strong>Berat : </strong>${iPhone.search[1].berat}</li>
                                    <li class="list-group-item"><strong>Layar : </strong>${iPhone.search[1].layar}</li>
                                    <li class="list-group-item"><strong>Kamera : </strong>${iPhone.search[1].kamera}</li>
                                  </ul>
                                </div>`;
          $(".spesifikasi").html(spesifikasi);
        } else if (cari == "iPhone XS Max") {
          const spesifikasi = `<div class="card" style="width: 30rem">
                                  <img src="${iPhone.search[2].img}" class="card-img-top" />
                                  <div class="card-body">
                                    <h3 class="card-title">${iPhone.search[2].nama}</h3>
                                  </div>
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><strong>Warna : </strong>${iPhone.search[2].warna}</li>
                                    <li class="list-group-item"><strong>Kapasitas : </strong>${iPhone.search[2].kapasitas}</li>
                                    <li class="list-group-item"><strong>Tinggi : </strong>${iPhone.search[2].tinggi}</li>
                                    <li class="list-group-item"><strong>Lebar : </strong>${iPhone.search[2].lebar}</li>
                                    <li class="list-group-item"><strong>Berat : </strong>${iPhone.search[2].berat}</li>
                                    <li class="list-group-item"><strong>Layar : </strong>${iPhone.search[2].layar}</li>
                                    <li class="list-group-item"><strong>Kamera : </strong>${iPhone.search[2].kamera}</li>
                                  </ul>
                                </div>`;
          $(".spesifikasi").html(spesifikasi);
        } else if (cari == "iPhone XR") {
          const spesifikasi = `<div class="card" style="width: 30rem">
                                  <img src="${iPhone.search[3].img}" class="card-img-top" />
                                  <div class="card-body">
                                    <h3 class="card-title">${iPhone.search[3].nama}</h3>
                                  </div>
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><strong>Warna : </strong>${iPhone.search[3].warna}</li>
                                    <li class="list-group-item"><strong>Kapasitas : </strong>${iPhone.search[3].kapasitas}</li>
                                    <li class="list-group-item"><strong>Tinggi : </strong>${iPhone.search[3].tinggi}</li>
                                    <li class="list-group-item"><strong>Lebar : </strong>${iPhone.search[3].lebar}</li>
                                    <li class="list-group-item"><strong>Berat : </strong>${iPhone.search[3].berat}</li>
                                    <li class="list-group-item"><strong>Layar : </strong>${iPhone.search[3].layar}</li>
                                    <li class="list-group-item"><strong>Kamera : </strong>${iPhone.search[3].kamera}</li>
                                  </ul>
                                </div>`;
          $(".spesifikasi").html(spesifikasi);
        } else if (cari == "iPhone 11") {
          const spesifikasi = `<div class="card" style="width: 30rem">
                                  <img src="${iPhone.search[4].img}" class="card-img-top" />
                                  <div class="card-body">
                                    <h3 class="card-title">${iPhone.search[4].nama}</h3>
                                  </div>
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><strong>Warna : </strong>${iPhone.search[4].warna}</li>
                                    <li class="list-group-item"><strong>Kapasitas : </strong>${iPhone.search[4].kapasitas}</li>
                                    <li class="list-group-item"><strong>Tinggi : </strong>${iPhone.search[4].tinggi}</li>
                                    <li class="list-group-item"><strong>Lebar : </strong>${iPhone.search[4].lebar}</li>
                                    <li class="list-group-item"><strong>Berat : </strong>${iPhone.search[4].berat}</li>
                                    <li class="list-group-item"><strong>Layar : </strong>${iPhone.search[4].layar}</li>
                                    <li class="list-group-item"><strong>Kamera : </strong>${iPhone.search[4].kamera}</li>
                                  </ul>
                                </div>`;
          $(".spesifikasi").html(spesifikasi);
        } else if (cari == "iPhone 11 Pro") {
          const spesifikasi = `<div class="card" style="width: 30rem">
                                  <img src="${iPhone.search[5].img}" class="card-img-top" />
                                  <div class="card-body">
                                    <h3 class="card-title">${iPhone.search[5].nama}</h3>
                                  </div>
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><strong>Warna : </strong>${iPhone.search[5].warna}</li>
                                    <li class="list-group-item"><strong>Kapasitas : </strong>${iPhone.search[5].kapasitas}</li>
                                    <li class="list-group-item"><strong>Tinggi : </strong>${iPhone.search[5].tinggi}</li>
                                    <li class="list-group-item"><strong>Lebar : </strong>${iPhone.search[5].lebar}</li>
                                    <li class="list-group-item"><strong>Berat : </strong>${iPhone.search[5].berat}</li>
                                    <li class="list-group-item"><strong>Layar : </strong>${iPhone.search[5].layar}</li>
                                    <li class="list-group-item"><strong>Kamera : </strong>${iPhone.search[5].kamera}</li>
                                  </ul>
                                </div>`;
          $(".spesifikasi").html(spesifikasi);
        } else if (cari == "iPhone 11 Pro Max") {
          const spesifikasi = `<div class="card" style="width: 30rem">
                                  <img src="${iPhone.search[6].img}" class="card-img-top" />
                                  <div class="card-body">
                                    <h3 class="card-title">${iPhone.search[6].nama}</h3>
                                  </div>
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><strong>Warna : </strong>${iPhone.search[6].warna}</li>
                                    <li class="list-group-item"><strong>Kapasitas : </strong>${iPhone.search[6].kapasitas}</li>
                                    <li class="list-group-item"><strong>Tinggi : </strong>${iPhone.search[6].tinggi}</li>
                                    <li class="list-group-item"><strong>Lebar : </strong>${iPhone.search[6].lebar}</li>
                                    <li class="list-group-item"><strong>Berat : </strong>${iPhone.search[6].berat}</li>
                                    <li class="list-group-item"><strong>Layar : </strong>${iPhone.search[6].layar}</li>
                                    <li class="list-group-item"><strong>Kamera : </strong>${iPhone.search[6].kamera}</li>
                                  </ul>
                                </div>`;
          $(".spesifikasi").html(spesifikasi);
        } else if (cari == "iPhone 12") {
          const spesifikasi = `<div class="card" style="width: 30rem">
                                  <img src="${iPhone.search[7].img}" class="card-img-top" />
                                  <div class="card-body">
                                    <h3 class="card-title">${iPhone.search[7].nama}</h3>
                                  </div>
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><strong>Warna : </strong>${iPhone.search[7].warna}</li>
                                    <li class="list-group-item"><strong>Kapasitas : </strong>${iPhone.search[7].kapasitas}</li>
                                    <li class="list-group-item"><strong>Tinggi : </strong>${iPhone.search[7].tinggi}</li>
                                    <li class="list-group-item"><strong>Lebar : </strong>${iPhone.search[7].lebar}</li>
                                    <li class="list-group-item"><strong>Berat : </strong>${iPhone.search[7].berat}</li>
                                    <li class="list-group-item"><strong>Layar : </strong>${iPhone.search[7].layar}</li>
                                    <li class="list-group-item"><strong>Kamera : </strong>${iPhone.search[7].kamera}</li>
                                  </ul>
                                </div>`;
          $(".spesifikasi").html(spesifikasi);
        } else if (cari == "iPhone 12 mini") {
          const spesifikasi = `<div class="card" style="width: 30rem">
                                  <img src="${iPhone.search[8].img}" class="card-img-top" />
                                  <div class="card-body">
                                    <h3 class="card-title">${iPhone.search[8].nama}</h3>
                                  </div>
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><strong>Warna : </strong>${iPhone.search[8].warna}</li>
                                    <li class="list-group-item"><strong>Kapasitas : </strong>${iPhone.search[8].kapasitas}</li>
                                    <li class="list-group-item"><strong>Tinggi : </strong>${iPhone.search[8].tinggi}</li>
                                    <li class="list-group-item"><strong>Lebar : </strong>${iPhone.search[8].lebar}</li>
                                    <li class="list-group-item"><strong>Berat : </strong>${iPhone.search[8].berat}</li>
                                    <li class="list-group-item"><strong>Layar : </strong>${iPhone.search[8].layar}</li>
                                    <li class="list-group-item"><strong>Kamera : </strong>${iPhone.search[8].kamera}</li>
                                  </ul>
                                </div>`;
          $(".spesifikasi").html(spesifikasi);
        } else if (cari == "iPhone 12 Pro") {
          const spesifikasi = `<div class="card" style="width: 30rem">
                                  <img src="${iPhone.search[9].img}" class="card-img-top" />
                                  <div class="card-body">
                                    <h3 class="card-title">${iPhone.search[9].nama}</h3>
                                  </div>
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><strong>Warna : </strong>${iPhone.search[9].warna}</li>
                                    <li class="list-group-item"><strong>Kapasitas : </strong>${iPhone.search[9].kapasitas}</li>
                                    <li class="list-group-item"><strong>Tinggi : </strong>${iPhone.search[9].tinggi}</li>
                                    <li class="list-group-item"><strong>Lebar : </strong>${iPhone.search[9].lebar}</li>
                                    <li class="list-group-item"><strong>Berat : </strong>${iPhone.search[9].berat}</li>
                                    <li class="list-group-item"><strong>Layar : </strong>${iPhone.search[9].layar}</li>
                                    <li class="list-group-item"><strong>Kamera : </strong>${iPhone.search[9].kamera}</li>
                                  </ul>
                                </div>`;
          $(".spesifikasi").html(spesifikasi);
        } else if (cari == "iPhone 12 Pro Max") {
          const spesifikasi = `<div class="card" style="width: 30rem">
                                  <img src="${iPhone.search[10].img}" class="card-img-top" />
                                  <div class="card-body">
                                    <h3 class="card-title">${iPhone.search[10].nama}</h3>
                                  </div>
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><strong>Warna : </strong>${iPhone.search[10].warna}</li>
                                    <li class="list-group-item"><strong>Kapasitas : </strong>${iPhone.search[10].kapasitas}</li>
                                    <li class="list-group-item"><strong>Tinggi : </strong>${iPhone.search[10].tinggi}</li>
                                    <li class="list-group-item"><strong>Lebar : </strong>${iPhone.search[10].lebar}</li>
                                    <li class="list-group-item"><strong>Berat : </strong>${iPhone.search[10].berat}</li>
                                    <li class="list-group-item"><strong>Layar : </strong>${iPhone.search[10].layar}</li>
                                    <li class="list-group-item"><strong>Kamera : </strong>${iPhone.search[10].kamera}</li>
                                  </ul>
                                </div>`;
          $(".spesifikasi").html(spesifikasi);
        } else if (cari == "iPhone 13") {
          const spesifikasi = `<div class="card" style="width: 30rem">
                                  <img src="${iPhone.search[11].img}" class="card-img-top" />
                                  <div class="card-body">
                                    <h3 class="card-title">${iPhone.search[11].nama}</h3>
                                  </div>
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><strong>Warna : </strong>${iPhone.search[11].warna}</li>
                                    <li class="list-group-item"><strong>Kapasitas : </strong>${iPhone.search[11].kapasitas}</li>
                                    <li class="list-group-item"><strong>Tinggi : </strong>${iPhone.search[11].tinggi}</li>
                                    <li class="list-group-item"><strong>Lebar : </strong>${iPhone.search[11].lebar}</li>
                                    <li class="list-group-item"><strong>Berat : </strong>${iPhone.search[11].berat}</li>
                                    <li class="list-group-item"><strong>Layar : </strong>${iPhone.search[11].layar}</li>
                                    <li class="list-group-item"><strong>Kamera : </strong>${iPhone.search[11].kamera}</li>
                                  </ul>
                                </div>`;
          $(".spesifikasi").html(spesifikasi);
        } else if (cari == "iPhone 13 Pro") {
          const spesifikasi = `<div class="card" style="width: 30rem">
                                  <img src="${iPhone.search[12].img}" class="card-img-top" />
                                  <div class="card-body">
                                    <h3 class="card-title">${iPhone.search[12].nama}</h3>
                                  </div>
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><strong>Warna : </strong>${iPhone.search[12].warna}</li>
                                    <li class="list-group-item"><strong>Kapasitas : </strong>${iPhone.search[12].kapasitas}</li>
                                    <li class="list-group-item"><strong>Tinggi : </strong>${iPhone.search[12].tinggi}</li>
                                    <li class="list-group-item"><strong>Lebar : </strong>${iPhone.search[12].lebar}</li>
                                    <li class="list-group-item"><strong>Berat : </strong>${iPhone.search[12].berat}</li>
                                    <li class="list-group-item"><strong>Layar : </strong>${iPhone.search[12].layar}</li>
                                    <li class="list-group-item"><strong>Kamera : </strong>${iPhone.search[12].kamera}</li>
                                  </ul>
                                </div>`;
          $(".spesifikasi").html(spesifikasi);
        } else if (cari == "iPhone 13 Pro Max") {
          const spesifikasi = `<div class="card" style="width: 30rem">
                                  <img src="${iPhone.search[13].img}" class="card-img-top" />
                                  <div class="card-body">
                                    <h3 class="card-title">${iPhone.search[13].nama}</h3>
                                  </div>
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><strong>Warna : </strong>${iPhone.search[13].warna}</li>
                                    <li class="list-group-item"><strong>Kapasitas : </strong>${iPhone.search[13].kapasitas}</li>
                                    <li class="list-group-item"><strong>Tinggi : </strong>${iPhone.search[13].tinggi}</li>
                                    <li class="list-group-item"><strong>Lebar : </strong>${iPhone.search[13].lebar}</li>
                                    <li class="list-group-item"><strong>Berat : </strong>${iPhone.search[13].berat}</li>
                                    <li class="list-group-item"><strong>Layar : </strong>${iPhone.search[13].layar}</li>
                                    <li class="list-group-item"><strong>Kamera : </strong>${iPhone.search[13].kamera}</li>
                                  </ul>
                                </div>`;
          $(".spesifikasi").html(spesifikasi);
        } else if (cari == "iPhone 14") {
          const spesifikasi = `<div class="card" style="width: 30rem">
                                  <img src="${iPhone.search[14].img}" class="card-img-top" />
                                  <div class="card-body">
                                    <h3 class="card-title">${iPhone.search[14].nama}</h3>
                                  </div>
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><strong>Warna : </strong>${iPhone.search[14].warna}</li>
                                    <li class="list-group-item"><strong>Kapasitas : </strong>${iPhone.search[14].kapasitas}</li>
                                    <li class="list-group-item"><strong>Tinggi : </strong>${iPhone.search[14].tinggi}</li>
                                    <li class="list-group-item"><strong>Lebar : </strong>${iPhone.search[14].lebar}</li>
                                    <li class="list-group-item"><strong>Berat : </strong>${iPhone.search[14].berat}</li>
                                    <li class="list-group-item"><strong>Layar : </strong>${iPhone.search[14].layar}</li>
                                    <li class="list-group-item"><strong>Kamera : </strong>${iPhone.search[14].kamera}</li>
                                  </ul>
                                </div>`;
          $(".spesifikasi").html(spesifikasi);
        } else if (cari == "iPhone 14 Pro") {
          const spesifikasi = `<div class="card" style="width: 30rem">
                                  <img src="${iPhone.search[15].img}" class="card-img-top" />
                                  <div class="card-body">
                                    <h3 class="card-title">${iPhone.search[15].nama}</h3>
                                  </div>
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><strong>Warna : </strong>${iPhone.search[15].warna}</li>
                                    <li class="list-group-item"><strong>Kapasitas : </strong>${iPhone.search[15].kapasitas}</li>
                                    <li class="list-group-item"><strong>Tinggi : </strong>${iPhone.search[15].tinggi}</li>
                                    <li class="list-group-item"><strong>Lebar : </strong>${iPhone.search[15].lebar}</li>
                                    <li class="list-group-item"><strong>Berat : </strong>${iPhone.search[15].berat}</li>
                                    <li class="list-group-item"><strong>Layar : </strong>${iPhone.search[15].layar}</li>
                                    <li class="list-group-item"><strong>Kamera : </strong>${iPhone.search[15].kamera}</li>
                                  </ul>
                                </div>`;
          $(".spesifikasi").html(spesifikasi);
        } else if (cari == "iPhone 14 Pro Max") {
          const spesifikasi = `<div class="card" style="width: 30rem">
                                  <img src="${iPhone.search[16].img}" class="card-img-top" />
                                  <div class="card-body">
                                    <h3 class="card-title">${iPhone.search[16].nama}</h3>
                                  </div>
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><strong>Warna : </strong>${iPhone.search[16].warna}</li>
                                    <li class="list-group-item"><strong>Kapasitas : </strong>${iPhone.search[16].kapasitas}</li>
                                    <li class="list-group-item"><strong>Tinggi : </strong>${iPhone.search[16].tinggi}</li>
                                    <li class="list-group-item"><strong>Lebar : </strong>${iPhone.search[16].lebar}</li>
                                    <li class="list-group-item"><strong>Berat : </strong>${iPhone.search[16].berat}</li>
                                    <li class="list-group-item"><strong>Layar : </strong>${iPhone.search[16].layar}</li>
                                    <li class="list-group-item"><strong>Kamera : </strong>${iPhone.search[16].kamera}</li>
                                  </ul>
                                </div>`;
          $(".spesifikasi").html(spesifikasi);
        } else if (cari == "iPhone 15") {
          const spesifikasi = `<div class="card" style="width: 30rem">
                                  <img src="${iPhone.search[17].img}" class="card-img-top" />
                                  <div class="card-body">
                                    <h3 class="card-title">${iPhone.search[17].nama}</h3>
                                  </div>
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><strong>Warna : </strong>${iPhone.search[17].warna}</li>
                                    <li class="list-group-item"><strong>Kapasitas : </strong>${iPhone.search[17].kapasitas}</li>
                                    <li class="list-group-item"><strong>Tinggi : </strong>${iPhone.search[17].tinggi}</li>
                                    <li class="list-group-item"><strong>Lebar : </strong>${iPhone.search[17].lebar}</li>
                                    <li class="list-group-item"><strong>Berat : </strong>${iPhone.search[17].berat}</li>
                                    <li class="list-group-item"><strong>Layar : </strong>${iPhone.search[17].layar}</li>
                                    <li class="list-group-item"><strong>Kamera : </strong>${iPhone.search[17].kamera}</li>
                                  </ul>
                                </div>`;
          $(".spesifikasi").html(spesifikasi);
        } else if (cari == "iPhone 15 Pro") {
          const spesifikasi = `<div class="card" style="width: 30rem">
                                  <img src="${iPhone.search[18].img}" class="card-img-top" />
                                  <div class="card-body">
                                    <h3 class="card-title">${iPhone.search[18].nama}</h3>
                                  </div>
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><strong>Warna : </strong>${iPhone.search[18].warna}</li>
                                    <li class="list-group-item"><strong>Kapasitas : </strong>${iPhone.search[18].kapasitas}</li>
                                    <li class="list-group-item"><strong>Tinggi : </strong>${iPhone.search[18].tinggi}</li>
                                    <li class="list-group-item"><strong>Lebar : </strong>${iPhone.search[18].lebar}</li>
                                    <li class="list-group-item"><strong>Berat : </strong>${iPhone.search[18].berat}</li>
                                    <li class="list-group-item"><strong>Layar : </strong>${iPhone.search[18].layar}</li>
                                    <li class="list-group-item"><strong>Kamera : </strong>${iPhone.search[18].kamera}</li>
                                  </ul>
                                </div>`;
          $(".spesifikasi").html(spesifikasi);
        } else if (cari == "iPhone 15 Pro Max") {
          const spesifikasi = `<div class="card" style="width: 30rem">
                                  <img src="${iPhone.search[19].img}" class="card-img-top" />
                                  <div class="card-body">
                                    <h3 class="card-title">${iPhone.search[19].nama}</h3>
                                  </div>
                                  <ul class="list-group list-group-flush">
                                    <li class="list-group-item"><strong>Warna : </strong>${iPhone.search[19].warna}</li>
                                    <li class="list-group-item"><strong>Kapasitas : </strong>${iPhone.search[19].kapasitas}</li>
                                    <li class="list-group-item"><strong>Tinggi : </strong>${iPhone.search[19].tinggi}</li>
                                    <li class="list-group-item"><strong>Lebar : </strong>${iPhone.search[19].lebar}</li>
                                    <li class="list-group-item"><strong>Berat : </strong>${iPhone.search[19].berat}</li>
                                    <li class="list-group-item"><strong>Layar : </strong>${iPhone.search[19].layar}</li>
                                    <li class="list-group-item"><strong>Kamera : </strong>${iPhone.search[19].kamera}</li>
                                  </ul>
                                </div>`;
          $(".spesifikasi").html(spesifikasi);
        } else if (cari == "") {
          return swal("", "Mohon isi tipe iPhone terlebih dahulu", "warning");
        }
      },
      error: (e) => {
        return swal("", `${e.responseText}`, "warning");
      },
    });
  });
});
