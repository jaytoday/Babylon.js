import { AlphaTestBlock } from 'babylonjs/Materials/Node/Blocks/Fragment/alphaTestBlock';
import { BonesBlock } from 'babylonjs/Materials/Node/Blocks/Vertex/bonesBlock';
import { InstancesBlock } from 'babylonjs/Materials/Node/Blocks/Vertex/instancesBlock';
import { MorphTargetsBlock } from 'babylonjs/Materials/Node/Blocks/Vertex/morphTargetsBlock';
import { ImageProcessingBlock } from 'babylonjs/Materials/Node/Blocks/Fragment/imageProcessingBlock';
import { ColorMergerBlock } from 'babylonjs/Materials/Node/Blocks/Fragment/colorMergerBlock';
import { VectorMergerBlock } from 'babylonjs/Materials/Node/Blocks/Fragment/vectorMergerBlock';
import { ColorSplitterBlock } from 'babylonjs/Materials/Node/Blocks/Fragment/colorSplitterBlock';
import { VectorSplitterBlock } from 'babylonjs/Materials/Node/Blocks/Fragment/vectorSplitterBlock';
import { TextureBlock } from 'babylonjs/Materials/Node/Blocks/Dual/textureBlock';
import { LightBlock } from 'babylonjs/Materials/Node/Blocks/Dual/lightBlock';
import { FogBlock } from 'babylonjs/Materials/Node/Blocks/Dual/fogBlock';
import { VertexOutputBlock } from 'babylonjs/Materials/Node/Blocks/Vertex/vertexOutputBlock';
import { FragmentOutputBlock } from 'babylonjs/Materials/Node/Blocks/Fragment/fragmentOutputBlock';
import { AddBlock } from 'babylonjs/Materials/Node/Blocks/addBlock';
import { ClampBlock } from 'babylonjs/Materials/Node/Blocks/clampBlock';
import { CrossBlock } from 'babylonjs/Materials/Node/Blocks/crossBlock';
import { DotBlock } from 'babylonjs/Materials/Node/Blocks/dotBlock';
import { MultiplyBlock } from 'babylonjs/Materials/Node/Blocks/multiplyBlock';
import { TransformBlock } from 'babylonjs/Materials/Node/Blocks/transformBlock';
import { NodeMaterialBlockConnectionPointTypes } from 'babylonjs/Materials/Node/nodeMaterialBlockConnectionPointTypes';

export class BlockTools {
    public static GetBlockFromString(data: string) {
        switch (data) {
            case "BonesBlock":
                return new BonesBlock("Bones");
            case "InstancesBlock":
                return new InstancesBlock("Instances");
            case "MorphTargetsBlock":
                return new MorphTargetsBlock("MorphTargets");
            case "AlphaTestBlock":
                return new AlphaTestBlock("AlphaTest");
            case "ImageProcessingBlock":
                return new ImageProcessingBlock("ImageProcessing");
            case "ColorMergerBlock":
                return new ColorMergerBlock("ColorMerger");
            case "VectorMergerBlock":
                return new VectorMergerBlock("VectorMerger");                
            case "ColorSplitterBlock":
                return new ColorSplitterBlock("ColorSplitter");
            case "VectorSplitterBlock":
                return new VectorSplitterBlock("VectorSplitter");
            case "TextureBlock":
                return new TextureBlock("Texture");
            case "LightBlock":
                return new LightBlock("Lights");
            case "FogBlock":
                return new FogBlock("Fog");
            case "VertexOutputBlock":
                return new VertexOutputBlock("VertexOutput");
            case "FragmentOutputBlock":
                return new FragmentOutputBlock("FragmentOutput");
            case "AddBlock":
                return new AddBlock("Add");
            case "ClampBlock":
                return new ClampBlock("Clamp");
            case "CrossBlock":
                return new CrossBlock("Dot");
            case "DotBlock":
                return new DotBlock("Dot");
            case "MultiplyBlock":
                return new MultiplyBlock("Multiply");
            case "TransformBlock":
                return new TransformBlock("Transform");
        }

        return null;
    }

    public static GetColorFromConnectionNodeType(type: NodeMaterialBlockConnectionPointTypes) {
        let color = "Red";
        switch (type) {
            case NodeMaterialBlockConnectionPointTypes.Float:
				color = "DimGrey";
                break;
            case NodeMaterialBlockConnectionPointTypes.Vector2:                
				color = "Chocolate";
                break;
            case NodeMaterialBlockConnectionPointTypes.Vector3:                
				color = "Crimson";
                break;
            case NodeMaterialBlockConnectionPointTypes.Vector4:                
				color = "DarkMagenta";
                break;
            case NodeMaterialBlockConnectionPointTypes.Color3:                
				color = "ForestGreen";
                break;
            case NodeMaterialBlockConnectionPointTypes.Color4:                
				color = "Gold";
                break;
            case NodeMaterialBlockConnectionPointTypes.Matrix:                
				color = "LightCoral";
                break;
        }

        return color;
    }

    public static GetConnectionNodeTypeFromString(type: string) {
        switch (type) {
            case "Float":
                return NodeMaterialBlockConnectionPointTypes.Float;
            case "Vector2":
                return NodeMaterialBlockConnectionPointTypes.Vector2;
            case "Vector3":
                return NodeMaterialBlockConnectionPointTypes.Vector3;
            case "Vector4":
                return NodeMaterialBlockConnectionPointTypes.Vector4;
            case "Matrix":
                return NodeMaterialBlockConnectionPointTypes.Matrix;
            case "Color3":
                return NodeMaterialBlockConnectionPointTypes.Color3;
            case "Color4":
                return NodeMaterialBlockConnectionPointTypes.Color4;
        }

        return NodeMaterialBlockConnectionPointTypes.AutoDetect;
    }

    public static GetStringFromConnectionNodeType(type: NodeMaterialBlockConnectionPointTypes) {
        switch (type){
            case NodeMaterialBlockConnectionPointTypes.Float:
                return "Float";
            case NodeMaterialBlockConnectionPointTypes.Vector2:
                return "Vector2";
            case NodeMaterialBlockConnectionPointTypes.Vector3:
                return "Vector3";
            case NodeMaterialBlockConnectionPointTypes.Vector4:
                return "Vector4";
            case NodeMaterialBlockConnectionPointTypes.Color3:
                return "Color3";
            case NodeMaterialBlockConnectionPointTypes.Color4:
                return "Color4";
            case NodeMaterialBlockConnectionPointTypes.Matrix:
                return "Matrix";
        }

        return "";
    }
}