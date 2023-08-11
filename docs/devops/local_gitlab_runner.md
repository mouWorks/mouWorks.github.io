# Run gitlab-ci locally

## Prerequisites
  - your project with gitlab-ci.yaml
  - [gitlab-runner installation](https://docs.gitlab.com/runner/install/)
  - docker

## Run
```bash
gitlab-runner -h
```

```text
NAME:
   gitlab-runner - a GitLab Runner

USAGE:
   gitlab-runner [global options] command [command options] [arguments...]

VERSION:
   16.1.0 (865283c5)

AUTHOR:
   GitLab Inc. <support@gitlab.com>

COMMANDS:
   exec                  execute a build locally
   list                  List all configured runners
   run                   run multi runner service
   register              register a new runner
   reset-token           reset a runner's token
   install               install service
   uninstall             uninstall service
   start                 start service
   stop                  stop service
   restart               restart service
   status                get status of a service
   run-single            start single runner
   unregister            unregister specific runner
   verify                verify all registered runners
   artifacts-downloader  download and extract build artifacts (internal)
   artifacts-uploader    create and upload build artifacts (internal)
   cache-archiver        create and upload cache artifacts (internal)
   cache-extractor       download and extract cache artifacts (internal)
   cache-init            changed permissions for cache paths (internal)
   health-check          check health for a specific address
   read-logs             reads job logs from a file, used by kubernetes executor (internal)
   help, h               Shows a list of commands or help for one command

GLOBAL OPTIONS:
   --cpuprofile value           write cpu profile to file [$CPU_PROFILE]
   --debug                      debug mode [$RUNNER_DEBUG]
   --log-format value           Choose log format (options: runner, text, json) [$LOG_FORMAT]
   --log-level value, -l value  Log level (options: debug, info, warn, error, fatal, panic) [$LOG_LEVEL]
   --help, -h                   show help
   --version, -v                print the version
```

```bash
gitlab-runner exec docker .test
```
docker -> docker or shell
.test -> name of job