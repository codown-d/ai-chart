# 使用官方 Node.js 作为基础镜像
FROM node:22 AS build

# 设置 npm 镜像源为淘宝镜像
RUN npm config set registry https://registry.npmmirror.com/

# 设置工作目录
WORKDIR /app

RUN npm cache clean --force
RUN npm install -g typescript 

# 安装 pnpm
RUN npm install -g pnpm

# 复制项目的 package.json 和 pnpm-lock.yaml
COPY package.json pnpm-lock.yaml ./

# 使用 pnpm 安装依赖
RUN pnpm install

# 复制项目文件
COPY . .

# 构建 Vite 项目
RUN npm run build

# 使用 Nginx 作为静态文件服务
FROM nginx:alpine

# 删除默认的 Nginx 配置文件
RUN rm -rf /usr/share/nginx/html/*

# 复制构建后的文件到 Nginx 的默认目录
COPY --from=build /app/dist /usr/share/nginx/html

# 修改 Nginx 配置文件以监听 8080 端口
COPY nginx.conf /etc/nginx/nginx.conf

# 暴露 8080 端口
EXPOSE 8080

# 启动 Nginx 服务
CMD ["nginx", "-g", "daemon off;"]
