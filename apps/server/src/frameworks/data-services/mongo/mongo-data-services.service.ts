import {
  DataSourceType,
  IBaseDataServices,
  IProgLanguageRepository,
  IProgSnippetRepository,
  IProgTopicRepository,
  ITagRepository,
  IUserRepository,
} from '../../../core';
import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import {
  ProgLanguageRepository,
  ProgSnippetRepository,
  ProgTopicRepository,
  TagRepository,
  UserRepository,
} from './repository-impl';

@Injectable()
export class MongoDataServices
  implements IBaseDataServices, OnApplicationBootstrap
{
  dataSourceType: DataSourceType = 'mongo';
  users: IUserRepository;
  progTopics: IProgTopicRepository;
  tags: ITagRepository;
  progSnippets: IProgSnippetRepository;
  progLanguages: IProgLanguageRepository;

  constructor(
    private readonly _users: UserRepository,
    private readonly _progTopics: ProgTopicRepository,
    private readonly _tags: TagRepository,
    private readonly _progSnippets: ProgSnippetRepository,
    private readonly _progLanguages: ProgLanguageRepository
  ) {}

  onApplicationBootstrap() {
    this.users = this._users;
    this.progTopics = this._progTopics;
    this.tags = this._tags;
    this.progSnippets = this._progSnippets;
    this.progLanguages = this._progLanguages;
  }
}
