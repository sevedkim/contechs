# C O N T E C H S
Tech-jargon Dictionary

# Getting Started
1. Install virtualbox
2. Install vagrant
3. Start up your VMs `vagrant up`


# Troubleshooting
If you get this error:
```
Vagrant was unable to mount VirtualBox shared folders. This is usually
because the filesystem "vboxsf" is not available. This filesystem is
made available via the VirtualBox Guest Additions and kernel module.
Please verify that these guest additions are properly installed in the
guest. This is not a bug in Vagrant and is usually caused by a faulty
Vagrant box. For context, the command attempted was:

mount -t vboxsf -o uid=500,gid=500 vagrant /vagrant

The error output from the command was:

/sbin/mount.vboxsf: mounting failed with the error: No such device
```

try this:
```
vagrant plugin install vagrant-vbguest
vagrant up
vagrant ssh
sudo ln -s /opt/VBoxGuestAdditions-4.3.10/lib/VBoxGuestAdditions /usr/lib/VBoxGuestAdditions
vagrant reload
```
