# Alias && git 

## Git branch 不使用頁面呈現
```bash
git config --global pager.branch false
```

## 常用的 alias

### 建立 bash_aliases

* `.bash_aliases`

```bash
alias nah="git reset --hard && git clean -df"
alias gs="git status"
alias pl=" pull"
alias gaa="git add ."
alias gc="git commit -m "
alias new_branch="git checkout -b "
alias vg="vagrant "
alias c="code "
function mygrep { grep -rnIi "$1" . --color; }
alias glp="git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cblueby %an %Cgreen(%cr)%Creset'"
```

### 自動載入 Alias

* 在你的(zshrc/bashrc)裡面加入以下

```bash
if [ -f ~/.bash_aliases ]; then
source ~/.bash_aliases
fi
```
* 這樣啟動時就會自動載入 你設定好的 alias

### Nah

* 復原目前本機的 Commit
```bash
nah='git reset --hard && git clean -df'
```

### mygrep
* 一個grep function, 抓取包含字串的內容 (會往下找)
```bash
function mygrep { grep -rnIi "$1" . --color; }
```



