import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {showcaseItem} from "../../components/data/general-interface";
import {MultiCardsComponent} from "../../components/reusable/multi-cards/multi-cards.component";
import { VIDEO_PORTFOLIO } from '../../components/data/video-portfolio';
import { VideoService } from '../../services/video.service';

@Component({
    selector: 'app-video',
    imports: [CommonModule, MultiCardsComponent],
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit{

  videoPortfolio: showcaseItem[] = [];

  constructor(private videoService: VideoService) {}

  InitVideoData(): void {
    this.videoPortfolio = VIDEO_PORTFOLIO.map(v => ({
      imgSrc: v.imgSrc,
      imgAlt: v.imgAlt,
      heading: v.heading,
      desc: v.desc,
      desc2: v.desc2,
      isVideo: v.isVideo,
      youtube: v.youtubeId ? this.videoService.toSafeYoutubeUrl(v.youtubeId) : undefined,
      linkText: v.linkText
    } as showcaseItem));
  }

  ngOnInit() :void{
    this.InitVideoData();
  }
}
