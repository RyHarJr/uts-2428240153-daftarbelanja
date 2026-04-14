const namaBarang = document.getElementById("nama");
const jumlahBarang = document.getElementById("jumlah");
const keteranganBarang = document.getElementById("keterangan");

const localDB = JSON.parse(localStorage.getItem("barang")) || [];

function tambahBarang() {
  const nama = namaBarang.value;
  const jumlah = jumlahBarang.value;
  const keterangan = keteranganBarang.value;

  if (!nama || !jumlah || !keterangan) {
    alert("Semua field harus diisi!");
    return;
  }

  const barangBaru = {
    nama,
    jumlah,
    keterangan,
  };

  localDB.push(barangBaru);

  localStorage.setItem("barang", JSON.stringify(localDB));

  alert("Barang berhasil ditambahkan!");
}

function tampilkanBarang() {
  const listBarang = document.getElementById("listBarang");



  localDB.forEach((barang, index) => {
    document.getElementById("listBarang").innerHTML += `
    <div class="card col-12 col-md-6 col-lg-4">
        <img class="card-img-top" src="https://images.unsplash.com/photo-1573376670774-4427757f7963?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Box" />
        <div class="card-body">
            <h4 class="card-title">${barang.nama}</h4>
            <p class="card-text">Jumlah: ${barang.jumlah}</p>
            <p class="card-text">Keterangan: ${barang.keterangan}</p>
        </div>
    </div>
    `;
  });
}
