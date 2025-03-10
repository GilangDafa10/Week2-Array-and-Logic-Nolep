// # Handling Data Array agar menghasilkan output yg baik | Part 1

// ## Soal 1
// ```js
// /*
// Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen. Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n.
// Tugas kamu adalah mengimplementasikan fungsi dataHandling agar dapat menampilkan data-data pada dari argumen seperti di bawah ini:
// */
let input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ]

function dataHandling(input) {
    for (let i = 0; i < input.length; i++) {
        console.log(`Nomor ID: ${input[i][0]}`);
        console.log(`Nama Lengkap: ${input[i][1]}`);
        console.log(`TTL: ${input[i][2]} ${input[i][3]}`);
        console.log(`Hobi: ${input[i][4]}`);
        console.log();
    }
}
console.log("Soal No 1 ===========")
dataHandling(input);

// output yang diharapkan

// Nomor ID:  0001
// Nama Lengkap:  Roman Alamsyah
// TTL:  Bandar Lampung 21/05/1989
// Hobi:  Membaca

// Nomor ID:  0002
// Nama Lengkap:  Dika Sembiring
// TTL:  Medan 10/10/1992
// Hobi:  Bermain Gitar

// Nomor ID:  0003
// Nama Lengkap:  Winona
// TTL:  Ambon 25/12/1965
// Hobi:  Memasak

// Nomor ID:  0004
// Nama Lengkap:  Bintang Senjaya
// TTL:  Martapura 6/4/1970
// Hobi:  Berkebun
// */
// ```

// ## Soal 2 
// pada soal yg kedua, kalian harus belajar method `splice`, `slice`, `join`, 'split', dan lainnya
// ```js
let input1 = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function dataHandling1(input) {
    input.splice(1, 1, "Roman Alamsyah Elsharawy");
    input.splice(2, 1, "Provinsi Bandar Lampung");
    input.splice(3, 1, "21/05/1989");
    input.splice(4, 0, "Pria");
    input.splice(5, 1, "SMA Internasional Metro");
    console.log(input);

    let date = input[3].split("/").reverse();
    let month = ["", "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    console.log(month[Number(date[1])]);
    console.log(date);
    let date2 = input[3].split("/");
    let date3 = `${date2[0]}-${date2[1]}-${date2[2]}`;
    console.log(date3);
    console.log(input[1].slice(0, 15));

}
console.log("Soal No 2 ===========")
dataHandling1(input1);

// /**
//  * keluaran yang diharapkan (pada console)
//  *
//  * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
//  * Mei
//  * ["1989", "21", "05"]
//  * 21-05-1989
//  * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
//  */
// ```
