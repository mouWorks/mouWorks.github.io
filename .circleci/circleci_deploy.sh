#! /bin/bash

if [ $CIRCLE_BRANCH == $SOURCE_BRANCH ]; then
  git config --global user.email "mou.wang@g.ncu.edu.tw"
  git config --global user.name "mouWorks"

  git clone $CIRCLE_REPOSITORY_URL out

  cd out
  git checkout $TARGET_BRANCH || git checkout --orphan $TARGET_BRANCH
  git rm -rf .
  cd ..

  sudo npm run build
  # write my custom domain name into the CNAME file
  # sudo echo "doc.m0u.work" > docs/.vuepress/dist/CNAME
  cp -a docs/.vuepress/dist/. out/.

  mkdir -p out/.circleci && cp -a .circleci/. out/.circleci/.
  cd out

#  sudo echo "doc.m0u.work" > CNAME
#  Try this?

  git add -A
  git commit -m "Automated deployment to GitHub Pages: ${CIRCLE_SHA1}" --allow-empty

  git push origin $TARGET_BRANCH
fi
