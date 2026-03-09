# docker file for the ci
# to build and publish:
# docker buildx build -t molgenis/molgenis-org-ci:v1.0.2 --platform linux/amd64 .
# docker push molgenis/molgenis-org-ci:v1.0.2

FROM ubuntu:noble

# general deps
RUN apt-get update
RUN apt-get install ruby-full build-essential zlib1g-dev lsb-release curl -y

# kubectl repo
RUN curl -LO https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl
RUN chmod +x ./kubectl
RUN mv ./kubectl /usr/local/bin/kubectl

#
# Helm (binary install – works on noble)
RUN curl -fsSL https://get.helm.sh/helm-v3.14.4-linux-amd64.tar.gz \
  | tar -xz \
 && mv linux-amd64/helm /usr/local/bin/helm \
 && chmod +x /usr/local/bin/helm \
 && rm -rf linux-amd64
#

# Azure CLI Tools
RUN mkdir -p /etc/apt/keyrings
RUN curl -sLS https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor | tee /etc/apt/keyrings/microsoft.gpg > /dev/null
RUN chmod go+r /etc/apt/keyrings/microsoft.gpg
RUN  AZ_DIST=$(lsb_release -cs) && echo "deb [arch=`dpkg --print-architecture` signed-by=/etc/apt/keyrings/microsoft.gpg] https://packages.microsoft.com/repos/azure-cli/ $AZ_DIST main" | tee /etc/apt/sources.list.d/azure-cli.list
RUN apt-get update
RUN apt-get install azure-cli -y

# jekyll
COPY Gemfile .
RUN gem install bundler jekyll
RUN bundle update --all