import { Component } from '@angular/core';

@Component ({
  selector: 'pm-products',
  templateUrl: './product-list.component.html'
})

export class ProductListComponent {
  pageTitle: string= 'Products List';
  showImage: boolean = false;
  buttonText: string[] = ['Show Image','Hide Image'];
  showImgShow: string= 'Show';
  hideImgHide: string='Hide';
  imageWidth: number = 50;
  imageMargin: number =2;
  products: any[]=[
    {
      'productId': 1,
      'productName': 'Leaf Rake',
      'productCode': 'GDN-0011',
      'releaseDate': 'March 19, 2016',
      'description': 'Leaf rake with 48-inch wooden handle.',
      'price': 19.95,
      'starRating': 3.2,
      'imageUrl': './assets/images/leafRake.png'
    },
    {
      'productId': 2,
      'productName': 'Garden Cart',
      'productCode': 'GDN-0023',
      'releaseDate': 'March 18, 2016',
      'description': '15 gallon capacity rolling garden cart',
      'price': 32.99,
      'starRating': 4.2,
      'imageUrl': './assets/images/gardenCart.jpg'
    },
    {
      'productId': 5,
      'productName': 'Hammer',
      'productCode': 'TBX-0048',
      'releaseDate': 'May 21, 2016',
      'description': 'Curved claw steel hammer',
      'price': 8.9,
      'starRating': 4.8,
      'imageUrl': './assets/images/hammer.jpg'
    }
  ];

  toggleImage(): void{
    this.showImage = !this.showImage;
    this.buttonText = this.buttonText;
  };

  // setText(buttonText, showImage): void {
  //   if (this.showImage === true)
  //   {document.getElementById('test').innerHTML = buttonText[0];}
  //   else{
  //   document.getElementById('test').innerHTML = buttonText[1];}
  // };
}
