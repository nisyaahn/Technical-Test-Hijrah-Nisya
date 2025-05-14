import { useState, useCallback } from "react";
import "./styles.css";

export default function App() {
  //memasukkan input dari pengguna
  const [inputNumber, setInputNumber] = useState("");
  //menampilkan hasil perhitungan sesuai dari rules
  const [calculationResult, setCalculationResult] = useState(0);

  //memastikan input hanya bisa berupa angka
  const handleInputChange = (e) => {
    const sanitizedInput = e.target.value.replace(/[^0-9]/g, "");
    setInputNumber(sanitizedInput);
  };

  //fungsi yang menangani pengiriman input dan menghitung perbedaan angka terbalik
  const handleSubmit = useCallback(() => {
    //validasi apabila input kosong, result kembali menjadi 0
    if (!inputNumber) {
      setCalculationResult(0);
      return;
    }

    //fungsi yang mengubah input string menjadi angka
    const originalNumber = parseInt(inputNumber, 10);
    //validasi input sebagai angka
    if (isNaN(originalNumber)) {
      setCalculationResult(0); //jika input bukan angka valid, result kembali menjadi 0
      return;
    }

    //reverse angka input untuk menghitung perbedaannya
    const reversedNumber = parseInt(
      inputNumber.split("").reverse().join(""),
      10
    );
    const difference = Math.abs(originalNumber - reversedNumber); //rumus menghitung selisih

    setCalculationResult(difference); //menyimpan hasil perhitungan ke result
  }, [inputNumber]);

  return (
    <div className="App">
      <div>
        {/*input angka dari pengguna*/}
        <label>
          Number:
          <input
            type="text"
            value={inputNumber}
            onChange={handleInputChange} //memanggil fungsi saat input berubah
          />
        </label>
        <button onClick={handleSubmit}>Submit</button>{" "}
        {/*tombol untuk mengirim input*/}
      </div>
      <div>
        {/*menampilkan hasil perhitungan pada result*/}
        Result: {calculationResult}
      </div>
    </div>
  );
}
