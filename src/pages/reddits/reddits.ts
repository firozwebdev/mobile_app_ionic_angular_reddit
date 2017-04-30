import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {RedditService} from "../../app/services/reddit.service";
import {DetailsPage} from "../details/details";


@Component({
    selector: 'reddits',
    templateUrl: 'reddits.html'
})
export class RedditsPage {
    items:any;
    category:any;
    limit:any;
    constructor(public navCtrl: NavController, private redditService: RedditService) {
        this.getDefaults();
    }

    ngOnInit() {
        //console.log(this.category);
        this.getAllPosts(this.category, this.limit);
        //console.log(this.limit);
    }

    getDefaults(){

        if(localStorage.getItem('category') != null){
            this.category = localStorage.getItem('category');
        }else{
            this.category = 'sports';
        }

        if(localStorage.getItem('limit') != null){
            this.limit = localStorage.getItem('limit');
        }else{
            this.limit =2;
        }
    }


    getAllPosts(category,limit){
        console.log('get post calling..');

        this.redditService.getPosts(category,limit)
            .subscribe(res => {
                this.items = res.data.children;
            });
    }

    viewItem(item){
        this.navCtrl.push(DetailsPage,{
            item:item
        });
    }

    changeCategory(){
        this.getAllPosts(this.category,this.limit);

    }


}