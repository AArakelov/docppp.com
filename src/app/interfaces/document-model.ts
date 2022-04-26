import { Specialization, DocumentType, SubType, FileModel } from './index';

export interface DocumentV2 {
  name: string;
  description?: any;
  id: number;
  ownerId: number;
  creatorId?: any;
  typeId: number;
  subTypeId: number;
  createdAt: Date;
  updatedAt: Date;
  specializationId: number;
  files: FileModel[];
  labResearches: any[];
  subType: SubType;
  specialization: Specialization;
}

export interface DocumentV1 {
  docsType: DocumentType;
  documents: DocumentV2[];
}
