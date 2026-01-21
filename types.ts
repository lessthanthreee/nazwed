export interface WishRequest {
  tone: 'poetic' | 'formal' | 'heartfelt';
  relationship: 'friend' | 'family' | 'colleague';
  brideName: string;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}
