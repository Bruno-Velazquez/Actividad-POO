interface Forma {
  calcularArea(): number;
}

class Circulo implements Forma {
  constructor(private radio: number) {}

  calcularArea(): number {
    return 3.1416 * this.radio ** 2;
  }
}

class Rectangulo implements Forma {
  constructor(
    private ancho: number,
    private alto: number
  ) {}

  calcularArea(): number {
    return this.ancho * this.alto;
  }
}

class Triangulo implements Forma {
  constructor(
    private base: number,
    private altura: number
  ) {}

  calcularArea(): number {
    return (this.base * this.altura) / 2;
  }
}

class CalculadoraArea {
  calcularAreaTotal(formas: Forma[]): number {
    return formas.reduce((total, forma) => total + forma.calcularArea(), 0);
  }
}

// Uso
const formas: Forma[] = [
  new Circulo(5),
  new Rectangulo(4, 6),
  new Triangulo(3, 8)
];

const calculadora = new CalculadoraArea();

const areaTotal = calculadora.calcularAreaTotal(formas);

console.log("Área total: " + areaTotal);