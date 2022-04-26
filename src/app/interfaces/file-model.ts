import { FileCharacter } from './index';

export interface FileModel {
  name: string;
  container: string;
  character: number;
  link?: any;
  type: string;
  url: string;
  originalFilename: string;
  size: number;
  dicomId: string;
  dicomseries: string;
  dicomStudyInstanceUID: string;
  dicomPath: string;
  studyViewerPath: string;
  studyViewerPathMobile: string;
  id: number;
  fileTypeId: number;
  documentId: number;
  fileCharacterId?: number;
  fileCharacter: FileCharacter;
}
