# VM Clean up

### some tips for free up spaces on linux VM

#### Check Current Spaces (with following commands)

##### `df-h`

-   list disk usage %

##### `sudo du -h --max-depth=1`

-   check disk usage inside folder

#### Free Up Commands

-   `Jornal files`
    -   system logs, can goes up to 4G

##### `journalctl --disk-usage`

-   check current journal file sizes

##### `journalctl --vacuum-size=300M`

-   only keep 300M, remove others

##### `journalctl --vacuum-time=7d`

-   only keep 7 days journal files

-   `Snap Packages`

##### `snap list --all`

-   show all snap packages

##### `LANG=en_US.UTF-8 snap list --all | awk '/disabled/{print $1, $3}`

-   list all disabled packages

##### `snap remove google-cloud-sdk --revision=264`

-   remove deprecated google-cloud-sdk-packages

##### `LANG=C snap list --all | while read snapname ver rev trk pub notes; do if [[ $notes = *disabled* ]]; then sudo snap remove "$snapname" --revision="$rev"; fi; done`

-   remove all _disabled_ snap packages.

-   `Linux cleanup`

##### `sudo apt-get autoremove`

##### `sudo apt-get autoclean`

#### Enlarge Disk Spaces

-   can be done _without_ VM restart/shutdown

##### `df -h`

-   check current disk space

##### `lsblk`

-   check disk info

##### `sudo growpart /dev/sda 1`

-   use growpart command

##### `sudo resize2fs /dev/sda1`

-   use resize2fs command

##### `df -h`

-   use command to check disk space. should be changed now.
