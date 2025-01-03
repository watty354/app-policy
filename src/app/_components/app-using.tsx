/**
 * アプリ概要ページ
 */
export const AppUsing = () => {
  return (
    <div className="md:max-w-2xl md:mx-auto">
      <div className="flex flex-col items-center text-gray-600 p-3 border-b-1">
        <p>「もしも100日後に人生が終わるなら」</p>
        <h1 className="text-2xl font-bold">アプリ概要ページ</h1>
      </div>

      <div className="px-3 text-gray-500 text-sm flex flex-col gap-6">
        <div className="space-y-2">
          <h2 className="text-xl font-bold text-gray-600">このアプリとは</h2>
          <p>バケットリストを作成して共有できるアプリです</p>
          <p>
            「バケットリスト」とは、人生でやりたいことリストをまとめるリストです。
            やりたいことや目標をリスト化し、それをアプリ内で共有することができるアプリです。
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-bold text-gray-600">
            【このバケットリストアプリの特徴】
          </h3>
          <p>バケットリストの共有</p>
          <ul className="list-disc list-inside">
            <li>
              作成したバケットリストを家族や友人と共有したり、達成状況をシェアすることができます。
            </li>
          </ul>
          <p>バケットリストの作成</p>
          <ul className="list-disc list-inside">
            <li>リストの作成ができます。</li>
            <li>達成したリストも可視化することができます。</li>
          </ul>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-bold text-gray-600">
            【バケットリストアプリとは？】
          </h3>
          <p>
            やりたいことや叶えたい目標をリスト化して、達成状況を管理できるアプリです。
          </p>
          <p>
            例えば、旅行の行き先リストを作成して行きたい場所を記録したり、趣味や挑戦したいことを整理して視覚化することで、モチベーションを高められます。また、共有機能を使って友人や家族とリストをシェアすることも可能です。
          </p>
          <p>
            達成したタスクをストーリーとして記録すれば、充実感を味わいながら次の目標に向かえます。
          </p>

          <div className="space-y-2"></div>
          <h3 className="text-lg font-bold text-gray-600">
            【共有機能で楽しさアップ】
          </h3>
          <p>
            作成したリストを家族や友人と共有したり、達成状況をシェアすることでモチベーションを高められます。一緒にリストを達成したり、共有することで新たな発見や楽しさが生まれます。
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-lg font-bold text-gray-600">
            【こんな方にオススメ】
          </h3>
          <ul className="list-disc list-inside">
            <li>人生でやりたいことリストを管理したい</li>
            <li>旅行先や挑戦したい趣味を記録したい</li>
            <li>達成した目標を記録として残したい</li>
            <li>家族や友人と目標を共有したい</li>
            <li>自分だけのシンプルなバケットリストアプリを探している</li>
          </ul>

          <div className="space-y-2"></div>
          <h3 className="text-lg font-bold text-gray-600">
            【基本的な使い方】
          </h3>
          <p>
            リスト作成画面の「＋」ボタンからリストを新規作成します。リストにはタイトルや予算、メモなどを記載することができます。
          </p>
          <p>
            作成されたリストは、みんなのリスト一覧画面に投稿されることになります。
          </p>
        </div>
      </div>
    </div>
  );
};
