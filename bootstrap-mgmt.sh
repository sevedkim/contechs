#!/usr/bin/env bash

# install the epel-release RPM (http://fedoraproject.org/wiki/EPEL)
#sudo rpm -iUvh http://dl.fedoraproject.org/pub/epel/7/x86_64/e/epel-release-7-8.noarch.rpm
sudo yum install epel-release

# install ansible (http://docs.ansible.com/intro_installation.html)
sudo yum -y update
sudo yum -y install ansible

# copy examples into /home/vagrant (from inside the mgmt node)
cp -a /vagrant/ansible/* /home/vagrant
chown -R vagrant:vagrant /home/vagrant

# configure hosts file for our internal network defined by Vagrantfile
cat >> /etc/hosts <<EOL

# vagrant environment nodes
10.99.99.10  mgmt
10.99.99.21  web1
10.99.99.22  web2

EOL
