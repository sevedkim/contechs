#!/usr/bin/env bash

# install the epel-release RPM if needed on CentOS, RHEL, or Scientific Linux (http://fedoraproject.org/wiki/EPEL)
sudo yum install epel-release

# install ansible (http://docs.ansible.com/intro_installation.html)
sudo yum install ansible

# configure hosts file for our internal network defined by Vagrantfile
cat >> /etc/hosts <<EOL

# vagrant environment nodes
10.0.15.10  mgmt
10.0.15.21  web1
10.0.15.22  web2

EOL
