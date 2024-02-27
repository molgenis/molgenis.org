# docker file for the ci
# to build and publish:
# docker build -t molgenis/molgenis-org-ci:v1.0.1 --build-arg ARCH=amd64/ .
# docker push molgenis/molgenis-org-ci:v1.0.1

FROM ubuntu:jammy

# general deps
RUN apt-get update
RUN apt-get install ruby-full build-essential zlib1g-dev lsb-release curl -y

# kubectl repo
RUN curl -fsSL https://packages.cloud.google.com/apt/doc/apt-key.gpg | apt-key add
RUN echo "deb https://apt.kubernetes.io/ kubernetes-xenial main" | tee /etc/apt/sources.list.d/kubernetes.list
RUN apt-get update
RUN apt-get install kubectl -y

#
##helm repo
RUN curl https://baltocdn.com/helm/signing.asc | gpg --dearmor | tee /usr/share/keyrings/helm.gpg > /dev/null
RUN echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/helm.gpg] https://baltocdn.com/helm/stable/debian/ all main" | tee /etc/apt/sources.list.d/helm-stable-debian.list
RUN apt-get update
RUN apt-get install helm -y
#

# Azure CLI Tools
RUN mkdir -p /etc/apt/keyrings
RUN curl -sLS https://packages.microsoft.com/keys/microsoft.asc | gpg --dearmor | tee /etc/apt/keyrings/microsoft.gpg > /dev/null
RUN chmod go+r /etc/apt/keyrings/microsoft.gpg
RUN  AZ_DIST=$(lsb_release -cs) && echo "deb [arch=`dpkg --print-architecture` signed-by=/etc/apt/keyrings/microsoft.gpg] https://packages.microsoft.com/repos/azure-cli/ $AZ_DIST main" | tee /etc/apt/sources.list.d/azure-cli.list
RUN apt-get update
RUN apt-get install azure-cli

# jekyll
COPY Gemfile .
RUN gem install bundler jekyll
RUN bundle update