# - ~/.gitconfig

<pre>
[alias]
  st = status
  ci = commit
  co = checkout
  b = branch
  cfg = config
  r = remote
  m = merge
  pl = pull
  ps = push
  l = log 
  sb = show-branch
  glog = log --graph --pretty=oneline --abbrev-commit --color --decorate

[color]
  ui = auto

[user]
  name = chengherui
  email = chengherui@gmail.com
</pre>  
  
# - ~/.profile

<pre>
function parse_git_dirty {
  [[ $(git status 2> /dev/null | tail -n1) != "nothing to commit (working directory clean)" ]] && echo "*"
}
function parse_git_branch {
  git branch --no-color 2> /dev/null | sed -e '/^[^*]/d' -e "s/* \(.*\)/[\1$(parse_git_dirty)]/"
}
export PS1='\h:\W\[\e[1;36m\]$(parse_git_branch)\[\e[0m\] \u$ '
</pre>
