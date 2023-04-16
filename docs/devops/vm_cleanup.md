# VM Clean up

### some tips for free up spaces on linux VM

#### Check Current Spaces (with following commands)

*  list disk usage %
```
df-h
```

* check disk usage inside folder
```
sudo du -h --max-depth=1
```

#### Free Up Commands

-   `Jornal files`
    -   system logs, can goes up to 4G

* check current journal file sizes
```
journalctl --disk-usage
```

*  only keep 300M, remove others
```
journalctl --vacuum-size=300M
```

* only keep 7 days journal files
```
journalctl --vacuum-time=7d
```

-   

-   `Snap Packages`

* show all snap packages
```
snap list --all
```

* list all disabled packages
```
LANG=en_US.UTF-8 snap list --all | awk '/disabled/{print $1, $3}
```

* remove deprecated google-cloud-sdk-packages
```
snap remove google-cloud-sdk --revision=264
```

* remove all _disabled_ snap packages.
```
LANG=C snap list --all | while read snapname ver rev trk pub notes; do if [[ $notes = *disabled* ]]; then sudo snap remove "$snapname" --revision="$rev"; fi; done
```

-   
-   `Linux cleanup`

```
sudo apt-get autoremove
sudo apt-get autoclean
```
#### Enlarge Disk Spaces

-   can be done _without_ VM restart/shutdown

* check current disk space
```
df -h
```

* check disk info

```
lsblk
```

* use growpart command
```
sudo growpart /dev/sda 1`
```

* use resize2fs command
```
sudo resize2fs /dev/sda1`
```

* use command to check disk space. should be changed now.
```
df -h
```

