class PostsController < ApplicationController
  def index
    @posts = Post.all.to_a
  end
end
