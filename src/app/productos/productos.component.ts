import { Component, OnInit } from '@angular/core';
import * as M from "materialize-css";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {



  constructor() {

  }

  ngOnInit(): void {
    M.AutoInit();

  }

  // Camiseta Negra
  camblack() {
    var myImg = document.getElementById('camiseta') as HTMLImageElement;
    myImg.src = "./assets/CamisetaNegraFrente.jpg";
  }

  //Camiseta Blanca 
  camwhite() {
    var myImg = document.getElementById('camiseta') as HTMLImageElement;
    myImg.src = "./assets/CamisetaFrenteBlanca.jpg";
  }

  // Camiseta Blanca Espalda
  camwhiteback() {
    var myImg = document.getElementById('camiseta') as HTMLImageElement;
    myImg.src = "./assets/CamisetaBlancaEspalda.jpg";
  }


  // Camiseta Negra Espalda
  camblackback() {
    var myImg = document.getElementById('camiseta') as HTMLImageElement;
    myImg.src = "./assets/CamisetaNegraEspalda.jpg";
  }


  // Sudadera Negra
  hoddieblack() {
    var myImg = document.getElementById('sudadera') as HTMLImageElement;
    myImg.src = "./assets/HoodieNegra.jpg";
  }

  // Sudadera Zip Blanca Back
  hoddiewhite() {
    var myImg = document.getElementById('sudadera') as HTMLImageElement;
    myImg.src = "./assets/HoodieBlanca.jpg";
  }

  // Zip Negra
  zipblack() {
    var myImg = document.getElementById('zip') as HTMLImageElement;
    myImg.src = "./assets/ZipNegraFrente.jpg";
  }

  // Zip Negra Espalda
  zipblackback() {
    var myImg = document.getElementById('zip') as HTMLImageElement;
    myImg.src = "./assets/ZipNegraEspalda.jpg";
  }

  // Zip Blanca
  zipwhite() {
    var myImg = document.getElementById('zip') as HTMLImageElement;
    myImg.src = "./assets/ZipBlancaFrente.jpg";
  }

  // Zip Blanca Espalda
  zipwhiteback() {
    var myImg = document.getElementById('zip') as HTMLImageElement;
    myImg.src = "./assets/ZipBlancaEspalda.jpg";
  }

  // Zip Blanca Espalda
  poloblack() {
    var myImg = document.getElementById('polo') as HTMLImageElement;
    myImg.src = "./assets/PoloNegro.jpg";
  }

  // Zip Blanca Espalda
  polowhite() {
    var myImg = document.getElementById('polo') as HTMLImageElement;
    myImg.src = "./assets/PoloBlanco.jpg";
  }

  // Mascarilla Negra
  maskblack() {
    var myImg = document.getElementById('mask') as HTMLImageElement;
    myImg.src = "./assets/MaskNegra.jpg";
  }

  // Mascarilla Blanca
  maskwhite() {
    var myImg = document.getElementById('mask') as HTMLImageElement;
    myImg.src = "./assets/MaskBlancaCaraNegra.jpg";
  }


  // iPhone Blanco
  iphonewhite() {
    var myImg = document.getElementById('apple') as HTMLImageElement;
    myImg.src = "./assets/FundaIphone.jpg";
  }

  // iPhone Negro
  iphoneblack() {
    var myImg = document.getElementById('apple') as HTMLImageElement;
    myImg.src = "./assets/Fundaiphonenegra.jpg";
  }

  // Cuaderno Negro
  cuadernoblack() {
    var myImg = document.getElementById('cuaderno') as HTMLImageElement;
    myImg.src = "./assets/CuadernoNegro.jpg";
  }

  // Cuaderno Blanco
  cuadernowhite() {
    var myImg = document.getElementById('cuaderno') as HTMLImageElement;
    myImg.src = "./assets/CuadernoBlanco.jpg";
  }

  // Taza Negra 
  tazablack() {
    var myImg = document.getElementById('taza') as HTMLImageElement;
    myImg.src = "./assets/TazaNegra.jpg";
  }

  // Taza Blanca
  tazawhite() {
    var myImg = document.getElementById('taza') as HTMLImageElement;
    myImg.src = "./assets/TazaBlanca.jpg";
  }


}

