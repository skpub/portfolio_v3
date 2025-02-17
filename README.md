# ポートフォリオ

ポートフォリオ三代目である。作り過ぎである。一回で満足して欲しい。

以下の通りの簡素な構成である。

* インフラ
    1. nginx
    1. GitHub Webhooks (CI/CD: master ブランチの push で発火)
    1. Jenkins (CI/CD: npm build して rsync してデプロイ)
    1. 自宅鯖(Proxmox VE 上に Jenkins と nginx のVMがそれぞれいる)
* フロントエンドフレームワーク
    1. Svelte 5 (SSG)
