import { ModelInit, MutableModel, __modelMeta__, CustomIdentifier, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";





type EagerPost = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<Post, 'postId'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly postId: string;
  readonly node: PostNode;
  readonly title: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPost = {
  readonly [__modelMeta__]: {
    identifier: CustomIdentifier<Post, 'postId'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly postId: string;
  readonly node: AsyncItem<PostNode>;
  readonly title: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Post = LazyLoading extends LazyLoadingDisabled ? EagerPost : LazyPost

export declare const Post: (new (init: ModelInit<Post>) => Post) & {
  copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

type EagerPostNode = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PostNode, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly post: Post;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly postNodePostPostId: string;
}

type LazyPostNode = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<PostNode, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly post: AsyncItem<Post>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly postNodePostPostId: string;
}

export declare type PostNode = LazyLoading extends LazyLoadingDisabled ? EagerPostNode : LazyPostNode

export declare const PostNode: (new (init: ModelInit<PostNode>) => PostNode) & {
  copyOf(source: PostNode, mutator: (draft: MutableModel<PostNode>) => MutableModel<PostNode> | void): PostNode;
}