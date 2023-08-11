ES Modify note
=====

* `helm pull elastic/elasticsearch --version 7.17.3 --untar` 
    * untar means unzip files

* `helm fetch elastic/elasticsearch --version --untar --untardir` 

* `tgz zxvf`
* `unzip to the folder and compare`


#### Upgrade note:
* need to wait until cluster ready.
    * re-index process.
* can validate by 2 process
    * check by dev tool
    * readiness:
        * will check flag *green*, then it's ready.
* Q: is it possible to have less than 2 nodes?
* A: 2 node might have `brain-split` issue. suggest using 3 node cluster would be safer.
