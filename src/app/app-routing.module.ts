import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { DataResolverService } from './resolver/data-resolver.service';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  { path: 'youtube', loadChildren: './youtube/youtube.module#YoutubePageModule' },
  { path: 'masinfo', loadChildren: './masinfo/masinfo.module#MasinfoPageModule' },
  {
    path: 'masinfo/:id',
    resolve: {
      special: DataResolverService
    },
    loadChildren: './masinfo/masinfo.module#MasinfoPageModule'
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
