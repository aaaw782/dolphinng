import { Component} from '@angular/core';
import { Toaster} from 'dolphinng';
@Component({
    selector: 'toaster-demo',
    templateUrl: './toaster-demo.component.html',
    styleUrls: ['./toaster-demo.component.less'],
    providers:[Toaster]
})
export class ToasterDemoComponent {
  tabIndex:number=0;
  showWaitToast:HTMLElement;
  toastOptions:{
    type:string,
    title:string,
    message:string
  }={
    type:'success',
    title:'Title',
    message:'Message'
  };
  constructor(private toaster:Toaster){
  }
  changTab(index:number){
    this.tabIndex=index;
  }
  popToaster(){
    if (this.toastOptions.type === 'showWait') {
      this.showWaitToast = this.toaster.pop(this.toastOptions);
    } else if (this.toastOptions.type === 'hideWait') {
      this.toaster.hideWait(this.showWaitToast);
    } else {
      this.toaster.pop(this.toastOptions);
    }
  }
  changeToasterType(type:string){
      this.toastOptions.type=type;
    console.log('radio');
  }
  popDemo(){
    this.toaster.pop({
      type:'success',
      title:'标题',
      message:'操作成功！',
      animated:true,
      delay:3000
    });
  }
}
