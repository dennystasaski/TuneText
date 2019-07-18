import { Component, OnInit } from '@angular/core';
import { PlayService } from '../play.service';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../api.service';
import { StoredPlayer } from 'src/models/storedplayer';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  buttonText = 'Play';
  savePlayerText = 'Save Your Tune?'
  saved = false
  savedID = ''

  constructor(private playService:PlayService,
    private route: ActivatedRoute,
    private apiService: ApiService) { }
  
  ngOnInit() {}

  ngOnDestroy() {
    this.playService.destroyPlayer();
  }

  pressButton() {
    if (this.buttonText === 'Play') {
      this.playService.playBoth();
      this.buttonText = 'Pause';
    } else {
      this.playService.pauseBoth();
      this.buttonText = 'Play';
    }
  }

  savePlayer() {
    this.saved = true
    const player = {
      song_name: this.playService.songID,
      emotion: this.playService.sentiment,
      text: this.playService.text,
      error: ''
    };
    this.apiService.storePlayer(player).subscribe(res => {
      this.savedID = res.id
    });
  }
}
