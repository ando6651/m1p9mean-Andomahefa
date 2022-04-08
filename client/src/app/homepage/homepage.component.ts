import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import { CommandeService } from '../shared/commande.service';
import { PlatService } from '../shared/plat.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  titre: string= '';
  datas: any;
  usePlat: boolean = true;
  constructor(private userService: UserService,private commandeService: CommandeService,private platService: PlatService, private router: Router) { }

  ngOnInit() {
    var commande = "liste des commandes";
    var plat = "liste des plats";
    this.userService.getHomeredirect().subscribe(
      (res:any) => {
        var profil=res['profil'];
        this.router.navigateByUrl('/'+profil);
        /*if ((profil == 'responsable')||(profil == 'livreur')) {
          this.titre=commande;
        this.usePlat=false;
          this.commandeService.getCommandeList().subscribe(
            (res:any) => {
              this.datas=res['commande'];
            },
            err => {
              console.log(err);
            }
          );
        }else{
          this.titre=plat;
          this.platService.getPlatList().subscribe(
            (res:any) => {
              this.datas=res['plat'];
              console.log(this.datas)
            },
            err => {
              console.log(err);
            }
          );
        }*/
      },
      err => {
        console.log(err);
      }
    );
  }

  onLogout(){
    this.userService.deleteToken();
    this.router.navigate(['/login']);
  }

}
