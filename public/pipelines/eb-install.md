# 1\. Install environment

### 1) Get depad-utils and configure environment.

Login and navigate to your home folder

```bash
cd ${HOME}
```

git clone https://github.com/molgenis/depad-utils.git
**or**
download depad-utils.tar.gz https://github.com/molgenis/depad-utils/releases

**_Note:_** Make sure ~/git/depad-utils/hpc-2.x/etc/skel/.bashrc was already deployed as root
and that /etc/skel/.bashrc was copied to your home dir when it was created.
If your .bashrc does not have the stuff from the template, you can add it manually and notify an admin to deploy the template in /etc/skel/.
To verify /apps/modules/modules.bashrc gets sourced: logout + login.
When ${HPC_ENV_PREFIX} is set your are good to continue to the next step.

```bash
echo ${HPC_ENV_PREFIX}
```
### 2) Create main folders for our HPC environment.
```bash
mkdir -m 0755 ${HPC_ENV_PREFIX}
mkdir -m 2775 ${HPC_ENV_PREFIX}/data/
mkdir -m 2775 ${HPC_ENV_PREFIX}/modules/
mkdir -m 2775 ${HPC_ENV_PREFIX}/software/
mkdir -m 2775 ${HPC_ENV_PREFIX}/sources/
mkdir -m 2770 ${HPC_ENV_PREFIX}/.tmp/
```
### 3) Configure system to use Lmod as module command.

**_Note: Lmod must already have been deployed as root using your Linux distro's package manager._**

In our case for CentOS use $root>: yum install lmod
```bash
cd ~/git/depad-utils/hpc-2.x/apps/modules/
cp -r modules* .lmod/ /apps/modules/
```
### 4) Download EasyBuild bootstrap script
```bash
export EASYBUILD_VERSION=2.8.1
mkdir -p /apps/sources/EasyBuild/
cd /apps/sources/EasyBuild
curl -O https://raw.githubusercontent.com/hpcugent/easybuild-framework/develop/easybuild/scripts/bootstrap_eb.py
mv bootstrap_eb.py bootstrap_eb_${EASYBUILD_VERSION}.py
```
### 5) Bootstrap EasyBuild in apps dir.
```bash
python /apps/sources/EasyBuild/bootstrap_eb_${EASYBUILD_VERSION}.py ${HPC_ENV_PREFIX}
```

### 6) Sanity check

logout and login again
```bash
module load EasyBuild
module list
eb --version
```
### 7) Install toolchain
```bash
eb foss-2015b.eb –robot
```

**_Note: some sources should be downloaded manually_ (see below)**
```bash
scp gcc-4.9.3.tar.bz2 /apps/sources/g/GCC/
scp gmp-6.0.0a.tar.bz2 /apps/sources/g/GCC/
scp mpc-1.0.2.tar.gz /apps/sources/g/GCC/
scp mpfr-3.1.2.tar.gz /apps/sources/g/GCC/
```
### 8) Installing additional packages

The following packages should be on the cluster/VM (this can only done with root access:
```bash
yum install libibverbs-devel
yum install openssl-devel
yum install unzip
yum install libX11-devel
yum install libXrender-devel
yum install libXext-devel
yum install mesa-libGL-devel
yum install mesa-libGLU-devel
```

### 9a) Get molgenis-easybuild repo

Now that easybuild is installed we have to have the molgenis easybuild configs because it contains a lot of custom easyconfigs that are (sometimes were at the moment we began with this) not in the original easybuild repo from Ghent University: [https://github.com/molgenis/easybuild-easyconfigs](https://github.com/molgenis/easybuild-easyconfigs)

There are 2 options:
- Fork this repo to your own repo and then do a git clone (on the cluster, then you can skip 9b)
- Download the latest zip or tar.gz at

[https://github.com/molgenis/easybuild-easyconfigs/releases/](https://github.com/molgenis/easybuild-easyconfigs/releases/) (proceed to 9b)

### 9b) Put the new repo on the cluster/VM

```bash
scp -r easybuild-easyconfigs yourusername@yourcluster.nl:${root}/${pathToMYeasybuildconfigs}
```